document.addEventListener('DOMContentLoaded', function () 
{
    const currentURL = window.location.href;
    const links      = document.querySelectorAll('.nav-menu a');

    links.forEach(function(link) 
    {
        if (link.href === currentURL) 
        {
            link.parentNode.classList.add('nav-item-active');
        }
    });
});
