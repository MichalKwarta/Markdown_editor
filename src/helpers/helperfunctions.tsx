export const sliceHelper = (str:string, ...slices:number[][]) => { 
    
    let newString = ""
    for (const sliceElem of slices) { 
        newString+=str.slice(...sliceElem)
    }
    return newString
}
