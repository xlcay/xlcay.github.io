document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.questions');
    accordions.forEach(accordion => {
      accordion.addEventListener('click', function() {
        const ansText = this.nextElementSibling;
        const icon = this.querySelector('.icon');
        const isOpen = ansText.classList.contains('open');
  
        // Toggle open class for sliding effect
        if (isOpen) {
          ansText.classList.remove('open');
          icon.src = '/projects/faq-accordion-main/assets/images/icon-plus.svg';
          this.setAttribute('aria-expanded', false);
        } else {
          ansText.classList.add('open');
          icon.src = '/projects/faq-accordion-main/assets/images/icon-minus.svg';
          this.setAttribute('aria-expanded', true);
        }
      });
    });
  });
