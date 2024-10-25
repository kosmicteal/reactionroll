import { Input } from "@mantine/core";
import { useDispatch } from "react-redux";
import { GlobalDispatch } from "../main";



export function BasicContent() {
    const dispatch: GlobalDispatch = useDispatch();

    function handleOnBlur(actionName: string, target: string) {
        dispatch({
            type: actionName,
            payload: target
        })
    }

    return (
        <>
            <Input variant="unstyled" size="title" radius="xs" placeholder="Character Name" onBlur={(e) => { handleOnBlur('SET_NAME', e.target.value) }} />
            <Input variant="unstyled" size="md-nb" radius="xs" placeholder="Class" onBlur={(e) => { handleOnBlur('SET_CLASS', e.target.value) }} />
        </>
    );
}