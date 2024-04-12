declare const mixins: {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss").Config> | undefined;
};
export default mixins;
