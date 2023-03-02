const links = ['linkPricipal', 'linkOp', 'linkContacto']
const activeNav = (current) => {
    const navLink = document.getElementById(current);
    links.forEach((link) => {
        if (document.getElementById(link).className.includes('active')) {
            document.getElementById(link).className = 'nav-link';
        }
    })
    navLink.className = 'nav-link active';
}

const openCompleteModal = () => {
    const modal = new bootstrap.Modal(document.getElementById('modalComplete'));
    modal.show();
}
const openOpinion = () => {
    const modal = new bootstrap.Modal(document.getElementById('modalOpinion'));
    modal.show();
}
const close2 = (modalId) => {
    $(`#${modalId}`).modal('hide');
}