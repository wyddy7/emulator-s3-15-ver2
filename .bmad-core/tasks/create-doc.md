# Task: Create Document

This task guides the creation of a document using a specified template.

**Workflow:**

1.  **Identify Template:** Determine the correct template file to use based on the user's request (e.g., `project-brief-tmpl.yaml`).
2.  **Load Template:** Read the content of the specified YAML template file.
3.  **Interactive Elicitation:** Go through the template section by section with the user.
    - For each section, present the title and instructions.
    - Ask the user for the relevant information to fill in that section.
    - Use the user's input to populate the template variables.
4.  **Review:** Once all sections are filled, present the complete document to the user for a final review.
5.  **Output:** Use the `*doc-out` command to save the final document to a file.
