export function CleanPhoneNumber(phoneNumber: string) {
    // Use a regular expression to remove +, -, and spaces
    return phoneNumber.replace(/[\+\-\s]/g, '');
  }