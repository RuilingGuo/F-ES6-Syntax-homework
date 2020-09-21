const inject = (items, sections) => {
    // TODO 我们这里没有需求要保留items，可以不使用result，使用当然也没啥问题
    const result = [...items];
    sections
        .sort((s1, s2) => s2.index - s1.index)
        .forEach((section) => {
            result.splice(section.index, 0, section.content);
        });
    return result;
};
export { inject };
