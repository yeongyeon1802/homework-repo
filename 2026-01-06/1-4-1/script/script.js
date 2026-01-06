"use strict";

const users = [
  {
    name: "kim",
    profile: { bio: "Hi" },
  },
  {
    name: "Lee",
    profile: null,
  },
];

for (const user of users) {
  const myProfile = user.profile?.bio ?? "소개 없음";

  const html = `<div>${user.name}: ${myProfile}</div>`;
  console.log(html);
}
