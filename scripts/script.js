function changeTheme() {
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = document.getElementById('theme');
    const toast = document.getElementById('toast');

    if (currentTheme.getAttribute('href') === 'styles/dark.css') {
        currentTheme.href = 'styles/light.css';
        themeIcon.src = 'assets/MoonIcon.svg';
        toast.innerText = 'Calculator (Light Mode)';
    } else {
        currentTheme.href = 'styles/dark.css';
        themeIcon.src = 'assets/SunIcon.svg';
        toast.innerText = 'Calculator (Dark Mode)';
    }
}

function liveScreen(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}