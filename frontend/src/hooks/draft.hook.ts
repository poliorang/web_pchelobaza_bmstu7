export function useDraft<T>(key: string) {
    
    const saveDraft = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value))
    };

    const getDraft = (): T | null => {
        const value = localStorage.getItem(key)

        if (!value) {
            return null;
        }

        return JSON.parse(value);
    };

    const clearDraft = () => {
        localStorage.removeItem(key);
    }

    return {
        saveDraft,
        getDraft,
        clearDraft,
    }
}