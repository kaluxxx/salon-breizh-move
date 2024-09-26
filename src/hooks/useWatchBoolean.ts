import { useEffect } from "react";

const useWatchBoolean = (
    watchField: () => string | undefined,
    setState: (value: boolean) => void,
    state: boolean,
    trueValue: string,
    falseValue: string,
    callback?: (boolean: boolean) => void
) => {
    useEffect(() => {
        const value = watchField();
        if (value === trueValue) {
            setState(true);
        } else if (value === falseValue) {
            setState(false);
        }

    }, [watchField, setState, trueValue, falseValue]);

    useEffect(() => {
        callback && callback(state);
    }, [state, callback]);
};

export default useWatchBoolean;
