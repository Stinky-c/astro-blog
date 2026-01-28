import type { MarkdownHeading } from "astro";

export type ArrayItem = { depth: number; slug: string; text: string };
export type NestedItem = ArrayItem & { children: NestedItem[] };

export function transformToNestedArray(items: MarkdownHeading[]): NestedItem[] {
    const nestedArray: NestedItem[] = [];
    const stack: NestedItem[] = [];

    items.forEach((item) => {
        const nestedItem: NestedItem = { ...item, children: [] };

        // While the stack has items and the depth of the top item is >= current item's depth
        while (
            stack.length > 0 &&
            stack[stack.length - 1].depth >= item.depth
        ) {
            stack.pop(); // Pop the stack
        }

        // If the stack is not empty, add the current item as a child of the last item in the stack
        if (stack.length > 0) {
            stack[stack.length - 1].children.push(nestedItem);
        } else {
            // If the stack is empty, this is a top-level item
            nestedArray.push(nestedItem);
        }

        // Push the current item onto the stack
        stack.push(nestedItem);
    });

    return nestedArray;
}
