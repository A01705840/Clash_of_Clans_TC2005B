alert('hola mundo');

const boton_add_do = document.getElementById("b-add_do");

boton_add_do.onclick = () => {
    document.getElementById('cbox_hidden_do').hidden = false;
    document.getElementById('in_hidden_do').hidden = false;
}

const boton_add_delegate = document.getElementById("b-add_delegate");
boton_add_delegate.onclick = () => {
    document.getElementById('cbox_hidden_delegate').hidden = false;
    document.getElementById('in_hidden_delegate').hidden = false;
}
const boton_add_schedule = document.getElementById("b-add_schedule");
boton_add_schedule.onclick = () => {
    document.getElementById('cbox_hidden_schedule').hidden = false;
    document.getElementById('in_hidden_schedule').hidden = false;
}
const boton_add_delete = document.getElementById("b-add_delete");
boton_add_delete.onclick = () => {
    document.getElementById('cbox_hidden_delete').hidden = false;
    document.getElementById('in_hidden_delete').hidden = false;
}