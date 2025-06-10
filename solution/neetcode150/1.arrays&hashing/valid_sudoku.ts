function isValidSudoku(board: string[][]): boolean {
    const cols = new Map<number, string[]>()
    const rows = new Map<number, string[]>()
    const squares = new Map<string, string[]>()

    for (let c = 0; c < 9; c++) {
        for (let r = 0; r < 9; r++) {
            let currentVal: string = board[r][c]
            
            if (currentVal === '.') {
                continue
            }

            if (!cols.has(c)) {
                cols.set(c, [])
            }

            if (!rows.has(r)) {
                rows.set(r, [])
            } 

            const squareKey = `${Math.floor(c / 3)}-${Math.floor(r / 3)}`
            if (!squares.has(squareKey)) {
                squares.set(squareKey, [])
            }

            if (cols.get(c)!.includes(currentVal) || 
                rows.get(r)!.includes(currentVal) ||
                squares.get(squareKey)!.includes(currentVal)){
                    return false
            }

            cols.get(c)!.push(currentVal)
            rows.get(r)!.push(currentVal)

            squares.get(squareKey)!.push(currentVal)

        }
    }

    return true
};