**Title:** "Mark complete" completes the wrong task

**Body:**

### What happens
When I click "Mark complete" on a task, a different task gets crossed out.

### Steps to reproduce
1. Open `index.html`.
2. Add three tasks: "Buy milk", "Walk dog", "Write report".
3. Click "Mark complete" next to **Walk dog**.

### Expected
"Walk dog" is crossed out.

### Actual
"Buy milk" is crossed out instead.

### Notes
- Clicking "Mark complete" on the first task seems to do nothing.
- There is a console message when the button is clicked, which may help.
