// Canadian Phone Number Formatter
// Formats phone numbers as user types: (XXX) XXX-XXXX

document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
      
      // Limit to 10 digits for Canadian phone numbers
      if (value.length > 10) {
        value = value.substring(0, 10);
      }
      
      // Format the phone number
      let formattedValue = '';
      
      if (value.length >= 1) {
        formattedValue = '(' + value.substring(0, 3);
      }
      
      if (value.length >= 4) {
        formattedValue += ') ' + value.substring(3, 6);
      }
      
      if (value.length >= 7) {
        formattedValue += '-' + value.substring(6, 10);
      }
      
      e.target.value = formattedValue;
    });
    
    // Handle backspace and delete keys properly
    phoneInput.addEventListener('keydown', function(e) {
      // Allow backspace, delete, tab, escape, enter
      if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
          // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
          (e.keyCode === 65 && e.ctrlKey === true) ||
          (e.keyCode === 67 && e.ctrlKey === true) ||
          (e.keyCode === 86 && e.ctrlKey === true) ||
          (e.keyCode === 88 && e.ctrlKey === true) ||
          // Allow home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
      }
      
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
    
    // Prevent pasting non-numeric content
    phoneInput.addEventListener('paste', function(e) {
      e.preventDefault();
      const paste = (e.clipboardData || window.clipboardData).getData('text');
      const numbers = paste.replace(/\D/g, '');
      if (numbers.length <= 10) {
        phoneInput.value = numbers;
        phoneInput.dispatchEvent(new Event('input'));
      }
    });
  }
});


