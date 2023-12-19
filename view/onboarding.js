
const VACANCIES_ENDPOINT = "https://meliteh-api.azurewebsites.net/category_vacancies?categoryId=16";

async function main() {
    const statusPanel = document.getElementById("status-panel");
    const search = new URLSearchParams(window.location.search);
    const jobId = search.get("jobId");
    if (!jobId) {
        statusPanel.textContent = "Malformed url: jobId missing";
        return;
    }
    /** @type {Vacancy[]} */
    const vacancies = await fetch(VACANCIES_ENDPOINT).then(rs => rs.json());
    const vacancy = vacancies.find(v => +v.JobId === +jobId);
    if (!vacancy) {
        statusPanel.textContent = "Job " + jobId + " not found in database";
        return;
    }
    document.getElementById("job-title").textContent = vacancy.JobTitle;
    document.getElementById("job-reference-code-holder").textContent = vacancy.JobRefNo;
    document.getElementById("job-description").textContent = vacancy.PublishedJobDescription;
    document.getElementById("apply-button").setAttribute("href", "https://hiportal.eu/Secure/Membership/Registration/Register.aspx?JobId=" + vacancy.JobId);
    statusPanel.textContent = "";
}

main().catch(error => {
    console.error(error);
    alert("Failed to initialize page!");
});
