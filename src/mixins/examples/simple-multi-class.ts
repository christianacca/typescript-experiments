import { createMixin } from '../create-mixin';

class MixinClass1 {
    property1: string;
    constructor() {
        MixinClass1.init(this);
    }
    method(): string {
        return this.property1;
    }
    method1(): string {
        return this.property1;
    }
    /**
     * optional init method
     */
    static init(instance: MixinClass1) {
        instance.property1 = 'MixinClass1';
    }
}

class MixinClass2 {
    property2: string;
    constructor() {
        MixinClass2.init(this);
    }
    method(): string {
        return this.property2;
    }
    method2(): string {
        return this.property2;
    }
    /**
     * optional init method
     */
    static init(instance: MixinClass2){
        instance.property2 = 'MixinClass2';
    }
}

class Class3 {
    property3 = 'Class3';
    method(): string {
        return this.property3;
    }
    method3(): string {
        return this.property3;
    }
}

let MultiClass = createMixin(Class3, MixinClass1, MixinClass2);
interface MultiClass extends Class3, MixinClass1, MixinClass2 {}

export { Class3, MixinClass1, MixinClass2, MultiClass };