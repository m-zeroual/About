function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    toggle_btn = document.querySelector('.social-icons')
    
    theme = document.querySelector('.toggle-btn')
    github = toggle_btn.querySelector('#GitHub')
    linkedin = toggle_btn.querySelector('#LinkedIn')
    email = toggle_btn.querySelector('#Email')
    medium = toggle_btn.querySelector('#Medium')
    resume = toggle_btn.querySelector('#Resume')

    if (targetTheme === 'light')
    {
        theme.setAttribute('src', './icons/theme/theme-icon-black.svg')
        linkedin.setAttribute('src', './icons/linkedin/linkedin-icon-black.svg')
        github.setAttribute('src', './icons/github/github-icon-black.svg')
        email.setAttribute('src', './icons/email/email-icon-black.svg')
        medium.setAttribute('src', './icons/medium/medium-icon-black.svg')
        resume.setAttribute('src', './icons/resume/resume-icon-white.svg')
    }
    else {
        theme.setAttribute('src', './icons/theme/theme-icon-white.svg')
        linkedin.setAttribute('src', './icons/linkedin/linkedin-icon-white.svg')
        github.setAttribute('src', './icons/github/github-icon-white.svg')
        email.setAttribute('src', './icons/email/email-icon-white.svg')
        medium.setAttribute('src', './icons/medium/medium-icon-white.svg')
        resume.setAttribute('src', './icons/resume/resume-icon-black.svg')
    }            
    document.documentElement.setAttribute('data-theme', targetTheme);
}

