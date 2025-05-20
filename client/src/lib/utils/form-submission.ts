/**
 * Utility functions for form submission to Google Forms
 */

interface FormData {
  [key: string]: string | number | boolean;
}

/**
 * Creates a Google Forms URL with form data
 * Note: This is a simplified version for demonstration. In production,
 * you'd need to replace the formId and entryIds with actual Google Form IDs.
 */
export const createGoogleFormsURL = (
  formData: FormData,
  formType: "contact" | "consultation"
): string => {
  // In a real implementation, you would use actual Google Form IDs
  const formId = formType === "contact" 
    ? process.env.GOOGLE_CONTACT_FORM_ID || "1FAIpQLSe_example_contact" 
    : process.env.GOOGLE_CONSULTATION_FORM_ID || "1FAIpQLSe_example_consultation";

  // Map form fields to Google Form entry IDs (these would be actual entry IDs in production)
  const entryMap = formType === "contact" 
    ? {
        name: "entry.123456789",
        email: "entry.987654321",
        subject: "entry.111222333",
        message: "entry.444555666"
      } 
    : {
        firstName: "entry.123123123",
        lastName: "entry.456456456",
        email: "entry.789789789",
        phone: "entry.321321321",
        studyDestination: "entry.654654654",
        programLevel: "entry.987987987",
        message: "entry.159159159"
      };

  // Create the URL with form data
  let url = `https://docs.google.com/forms/d/e/${formId}/formResponse?`;
  
  // Add form data to URL
  Object.entries(formData).forEach(([key, value]) => {
    if (entryMap[key as keyof typeof entryMap]) {
      url += `${entryMap[key as keyof typeof entryMap]}=${encodeURIComponent(String(value))}&`;
    }
  });

  return url.slice(0, -1); // Remove trailing &
};

/**
 * Submit form data to Google Forms via a hidden iframe to prevent page navigation
 */
export const submitToGoogleForms = async (
  formData: FormData,
  formType: "contact" | "consultation"
): Promise<boolean> => {
  try {
    // Create a hidden iframe to submit the form
    const iframe = document.createElement("iframe");
    iframe.name = `hidden-form-${Date.now()}`;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = createGoogleFormsURL(formData, formType);
    form.target = iframe.name;

    // Append form to the document and submit
    document.body.appendChild(form);
    form.submit();

    // Clean up
    setTimeout(() => {
      document.body.removeChild(iframe);
      document.body.removeChild(form);
    }, 1000);

    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
