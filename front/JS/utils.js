



/**
 * 
 * @param {Array} colors 
 * @param {HTMLSelectElement} select
 * @returns 
 */
 function optionColors(colors) {
    let select = document.querySelector('#colors');
    for (let i = 0; i < colors.length; i++){
        let option = new Option(colors[i], colors[i]);
        select.appendChild(option);
    }

    console.log(select);
}


  


export { optionColors };