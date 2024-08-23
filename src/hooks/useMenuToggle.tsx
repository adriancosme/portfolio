import { useReducer } from "react";

const initialState = { isOpen: false };

type Action = | { type: "open" } | { type: "close" };

interface State {
    isOpen: boolean;
}

const reducer = (state: State, action: Action) => {
    if (action.type === "open") {
        return { isOpen: true };
    }

    if (action.type === "close") {
        return { isOpen: false };
    }

    return state;
}

export default function useMenuToggle() {
    const [{ isOpen }, dispatch] = useReducer(reducer, initialState);

    const toggle = () => {
        dispatch({ type: isOpen ? "close" : "open" });
    }

    return { isOpen, toggle };
}