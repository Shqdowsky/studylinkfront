export const SaveIdstoLS = (id: string) => {

    let idsArray: string[] = JSON.parse(localStorage.getItem('visitedIds') || '[]');
    
    if (!idsArray.includes(id)) {
        idsArray.unshift(id);
        if (idsArray.length > 10) {
            idsArray.pop();
        }
        localStorage.setItem('visitedIds', JSON.stringify(idsArray));
        return idsArray;
    }
}