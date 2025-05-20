// src/lib/utils/googleForms.ts
interface GoogleFormsConfig {
  formId: string;
  fieldMapping: Record<string, string>;
}

/**
 * Submits data to Google Forms using a hidden form approach
 * @param formData The form data to submit
 * @param config Configuration for the target Google Form
 * @returns Promise that resolves when submission is complete
 */
export const submitToGoogleForms = async (
  formData: Record<string, any>,
  config: GoogleFormsConfig
): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      // Create a temporary container div
      const container = document.createElement('div');
      container.style.display = 'none';
      document.body.appendChild(container);

      // Create a form element
      const form = document.createElement('form');
      form.action = `https://docs.google.com/forms/d/e/${config.formId}/formResponse`;
      form.method = 'POST';
      form.target = '_blank'; // Open in new window (though we'll remove it immediately)
      form.style.display = 'none';

      // Add all fields as hidden inputs
      Object.entries(config.fieldMapping).forEach(([formField, entryId]) => {
        if (formData[formField] !== undefined && formData[formField] !== '') {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `entry.${entryId}`;
          input.value = formData[formField].toString();
          form.appendChild(input);
        }
      });

      // Add submit button
      const submitInput = document.createElement('input');
      submitInput.type = 'hidden';
      submitInput.name = 'submit';
      submitInput.value = 'Submit';
      form.appendChild(submitInput);

      // Add form to container and submit
      container.appendChild(form);
      form.submit();

      // Clean up after submission
      setTimeout(() => {
        document.body.removeChild(container);
        resolve(true);
      }, 1000);

    } catch (error) {
      console.error('Error submitting to Google Forms:', error);
      resolve(false);
    }
  });
};