# Recording guide (not part of the repo you push)

## Before you record
1. Create a new **throwaway** GitHub repo (public or private), e.g. `tiny-todo-bug-hunt`.
2. Upload everything except this guide, `SOLUTION.md`, and the two `ISSUE_*.md` files (or push it with git beforehand).
3. Create GitHub Issue #1 from `ISSUE_1.md`. Optionally create Issue #2 from `ISSUE_2_BONUS.md`.
4. Make sure the repo's default branch is `main`.
5. Install VS Code, and optionally the "Live Server" extension.
6. Log in to GitHub in the browser and VS Code beforehand (off camera), so no passwords or tokens appear on screen.

## What to do on camera (about 40 minutes)
| Time | Phase | Clicks |
|---|---|---|
| 0-5 | Setup | Open the repo on GitHub, open Issues, read Issue #1, click Code, then Open with VS Code (or Codespaces); expand the file tree |
| 5-10 | Reproduce | Open the app in the browser, add 3 tasks, click Mark complete on the second one, observe the wrong result and try the first one |
| 10-20 | DevTools | Right-click, Inspect. Elements tab: look at the button's `data-id`. Console tab: read "Completing task with id:". Sources tab: open `app.js`, click a line number to set a breakpoint in `onCompleteClick`, click the button again, use Step over / Step into to enter `completeTask` |
| 20-27 | Fix | VS Code search panel, search `completeTask`, open `todo-logic.js`, click the faulty line, edit, save |
| 27-32 | Verify | Refresh the browser, repeat the steps, confirm the fix. Optionally run `npm test` in the terminal panel |
| 32-38 | Commit | Source Control panel, review the diff, click +, write a commit message, Create branch, Publish/Sync Changes |
| 38-40 | PR | On GitHub click Compare & pull request, add title and description (write "Fixes #1"), click Create pull request |

## Padding if you finish early
- Fix the bonus bug (Issue #2) the same way and open a second PR.
- Merge the first PR and look at the repo's Commits page.
- Leave a review comment on your own PR.

## Narration reminders
- Say what you will click and where it is, then why.
- Say what you expected and what actually happened.
- Narrate scrolling, loading and waiting.
- Mistakes and recoveries are valuable. Leave them in.
