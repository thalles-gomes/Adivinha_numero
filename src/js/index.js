function GuessNumber() 
{
    const palpiteInput = document.getElementById('palpiteInput');
    const recebePalpite = document.getElementById('recebePalpite');
    const resultado = document.getElementById('resultado');
    const recebeButton = document.getElementById('recebeButton');
    const btnPalpite = document.getElementById('btnPalpite');
    
    let = totalPalpites = 1;
    const rand = () => Math.floor(Math.random() * 100) + 1;
    let randNumber = rand();

    this.start = () => 
    {
        this.capturaClick();
    }

    this.capturaClick = () => 
    {
        document.addEventListener('click', (e) => 
        {
            const el = e.target;

            if (el.classList.contains('btn-palipte')) 
            {
               console.log(`turno: ${totalPalpites}º, número: ${randNumber}`);
                this.comparaPalpite();
                this.armazenaPalpite();
                totalPalpites++;
                
                if (totalPalpites > 5) {
                    resultado.textContent = `Suas chances acabaram, o valor era : ${randNumber}`;
                    this.stopGame();
                }
            }
            
            if (el.classList.contains('btn-reset'))
            {
                this.resetGame(el);
            }

        });
    }

    this.armazenaPalpite = () => 
    {
        recebePalpite.textContent += `${palpiteInput.value} `;
        palpiteInput.value = '';
        palpiteInput.focus();
    }

    this.comparaPalpite = () => 
    {
        if (palpiteInput.value < randNumber) resultado.textContent = 'Errado: O valor é maior!';
        if (palpiteInput.value > randNumber) resultado.textContent = 'Errado: O valor é menor!';
        if (palpiteInput.value == randNumber) {
            resultado.textContent = 'VOCÊ ACERTOU!!';
            this.stopGame();
        };
    }

    this.stopGame = () => 
    {
        palpiteInput.disabled = true;
        btnPalpite.disabled = true;
        this.createButton();
    }

    
    this.createButton = () => 
    {
        const btnReset = document.createElement('button');
        btnReset.classList.add('btn-reset');
        btnReset.textContent = 'Jogar de novo ?';
        // recebeButton.appendChild(btnReset);
        recebeButton.insertAdjacentElement("afterend", btnReset);
    }

    this.resetGame = (el) => 
    {
        palpiteInput.disabled = false;
        btnPalpite.disabled = false;
        recebePalpite.textContent = '';
        resultado.textContent = '';
        totalPalpites = 1;
        randNumber = rand();
        // recebeButton.removeChild(el);
        el.remove();
    }
}

const guessNumber = new GuessNumber();
guessNumber.start();