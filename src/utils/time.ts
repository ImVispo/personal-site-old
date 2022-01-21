const birthday = new Date('3 December 2000 0:00:00 PST');
const birthdayMs = Date.now() - birthday.getTime();
const yearMs = 1000 * 60 * 60 * 24 * 365;
export const age = Math.floor(birthdayMs / yearMs);
