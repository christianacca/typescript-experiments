export interface SelectableDataWithDefault {
    isSelected: boolean;
}
export type SelectableCtorData = Partial<SelectableDataWithDefault>;

export class Selectable implements SelectableDataWithDefault {
    isSelected: boolean;
    constructor(data: SelectableCtorData) {
        Selectable.init(this, data);
    }
    toggleSelection() {
        this.isSelected = !this.isSelected;
    }
    /**
     * optional init method
     */
    static init(instance: Selectable, data: SelectableCtorData) {
        Object.assign(instance, data);
        // assign missing defaults
        instance.isSelected = data.isSelected == null ? false : data.isSelected;
    }
}