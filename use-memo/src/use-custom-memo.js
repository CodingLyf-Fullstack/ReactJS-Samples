import { useRef } from "react"

const useCustomMemo = (callback, deps) => {

    const memoizedRef = useRef(null);

    const areDependenciesSame = (prevDeps = [], nextDeps = []) => {
        if(prevDeps.length == 0) return false;
        if(prevDeps.length != nextDeps.length) return false;

        for(let i=0;i<prevDeps.length;i++) {
            return Object.is(prevDeps[i], nextDeps[i])
        }

    }

    if(!areDependenciesSame(deps, memoizedRef.current?.deps)) {
        memoizedRef.current = {
            value: callback(),
            deps: deps
        }
    }

    return memoizedRef.current.value;

}

export default useCustomMemo;