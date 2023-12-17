import type { Ref, ComputedRef, UnwrapRef } from 'vue';

export type Snapshot<T> = {
	snapshot: T;
	datetime: string;
};

export interface Options {
	limit?: Ref<number> | number;
	delay?: Ref<number> | number;
	include?: string[];
	exclude?: string[];
}

export interface ReturnData<T> {
	state: Ref<UnwrapRef<T>>;
	undo: () => void;
	redo: () => void;
	undoList: Ref<Snapshot<T>[]>;
	redoList: Ref<Snapshot<T>[]>;
	history: Ref<Snapshot<T>[]>; // undoList 的别名
	canUndo: ComputedRef<boolean>;
	canRedo: ComputedRef<boolean>;
}

export declare function useSnapshotRef<Raw extends object>(
	raw: Raw,
	options?: Partial<Options>
): ReturnData<Raw>;
