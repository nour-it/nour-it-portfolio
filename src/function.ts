
export function getContent(content: any): any {
    const userPreferredLanguage = navigator.language || "en-EN";
    return content[userPreferredLanguage.split("-")[0]] || content.en
}