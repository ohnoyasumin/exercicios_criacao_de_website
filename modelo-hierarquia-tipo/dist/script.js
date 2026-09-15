/**
 * tipografia.js
 * Manipulação dinâmica de estilos de hierarquia tipográfica via JavaScript DOM
 * Inspirado nos conceitos de "Elementos de Design em JavaScript"
 */

document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos botões de controle
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnReduzir = document.getElementById('btn-reduzir');
    const btnReset = document.getElementById('btn-reset');

    // Elemento raiz (:root) para alteração das variáveis CSS
    const root = document.documentElement;

    /**
     * Altera a escala tipográfica global através da variável CSS --scale-ratio
     * @param {number} fator - Multiplicador de escala (ex: 1.2 para 120%)
     */
    function aplicarEscalaTipografica(fator) {
        root.style.setProperty('--scale-ratio', fator);
        console.log(`[Tipografia JS] Nova razão de escala aplicada: ${fator}`);
    }

    // Eventos de clique
    if (btnAumentar) {
        btnAumentar.addEventListener('click', () => {
            aplicarEscalaTipografica(1.2);
        });
    }

    if (btnReduzir) {
        btnReduzir.addEventListener('click', () => {
            aplicarEscalaTipografica(0.9);
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            aplicarEscalaTipografica(1.0);
        });
    }
});