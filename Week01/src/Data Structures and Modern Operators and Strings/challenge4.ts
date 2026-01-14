document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

const textarea = document.querySelector('textarea')!;
const button = document.querySelector('button')!;

button.textContent = 'Convert'

button.addEventListener('click', () => {
    const text = textarea.value

    const rows = text.split('\n')

    rows.forEach((row, index) => {
        const lower = row.trim().toLowerCase()

        const words = lower.split('_');

        if (words.length < 2) return;

        const camelCase = words
            .map((word, i) => {
                if (i === 0) return word;
                return word[0].toUpperCase() + word.slice(1);
            })
            .join('');

        const output =
            camelCase.padEnd(20, ' ') + 'OK'.repeat(index + 1);

        console.log(output);
    })
})