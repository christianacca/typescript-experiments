interface Type<T> {
    new (...args: any[]): T;
}

interface MixinType<T> {
    new (...args: any[]): T;
    init?(instance: T, ...args: any[]): void;
}

function createMixin<T, TMixin1, TMixin2 extends Type<T & TMixin1>>(targetClass: Type<T>, mixin1: MixinType<TMixin1>): TMixin2
function createMixin<T, TMixin1, TMixin2, TResult extends Type<T & TMixin1 & TMixin2>>(targetClass: Type<T>, mixin1: MixinType<TMixin1>, mixin2: MixinType<TMixin2>): TResult
function createMixin(targetClass: Type<any>, ...baseClasses: MixinType<any>[]): Type<any> {

    // ensure (new Class() instanceof targetClass) === true
    const mixinPrototype = Object.create(targetClass.prototype);

    baseClasses.concat([targetClass]).forEach(ctor => {
        // note: in ES2015 prototype properties are NOT enumerable
        // todo: copy property descriptor's rather than the value the property returns which we're currently doing here
        Object.getOwnPropertyNames(ctor.prototype).filter(n => n !== 'constructor').forEach(name => {
            mixinPrototype[name] = ctor.prototype[name];
        });
    });

    // note: we can't use the ES2015 class keyword to define the class
    // this is because an ES2015 the constructor function produced has
    // a ready-only prototype property which we need to assign 
    let Class = function (...args: any[]) {
        const instance = new targetClass(args);
        Object.setPrototypeOf(instance, mixinPrototype);
        baseClasses.forEach(ctor => {
            if (ctor.init) {
                ctor.init(instance, ...args)
            }
        });
        return instance;
    };

    Class.prototype = mixinPrototype;
    Class.prototype.constructor = Class;
    return Class as any;
}

export { createMixin }