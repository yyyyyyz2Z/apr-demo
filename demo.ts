export function getUserAge(user: any): number {
  return user.profile.age.trim();
}
