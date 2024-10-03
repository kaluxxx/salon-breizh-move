import { useEffect } from "react";

const useWatchBoolean = (
    watchField: () => string | undefined,
    setState: (value: boolean) => void,
    trueValue: string,
    falseValue: string,
) => {
    useEffect(() => {
        const value = watchField();
        if (value === trueValue) {
            setState(true);
        } else if (value === falseValue) {
            setState(false);
        }

    }, [watchField, setState, trueValue, falseValue]);
};

export default useWatchBoolean;
