"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    //section.append(Board(_=>render(root)));

    root.append(section);
};
const state = {
    pin : null,
    modal: null
}
$( _ => {
 const url='https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AaM1cX4ewT6F7X49kuLFgcKCWUAgFM4mt0PH-4dEIuuRXKAoAwAAAAA&fields=id%2Clink%2Cnote%2Cboard%2Cimage%2Cmetadata%2Coriginal_link%2Ccreator';
   $.getJSON(url,(json) => {
       pin.user = json;
       console.log(state.pin.data);
       const root = $('#root');
       render(root);
   });
})
