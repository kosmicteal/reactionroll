import { Input } from "@mantine/core";



export function BasicContent() {
    return (
        <>
            <Input variant="unstyled" size="title" radius="xs" placeholder="Character Name" />
            <Input variant="unstyled" size="md-nb" radius="xs" placeholder="Class" />
        </>
    );
}