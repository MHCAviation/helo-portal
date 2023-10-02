
const VACANCIES_ENDPOINT = "https://meliteh-api.azurewebsites.net/category_vacancies?categoryId=16";

class Vacancy {
    JobId = 476;
    ClientId = "13592";
    Company = "DAT LT";
    Location = "Karmelava,Lithuania (LT / LTU)";
    JobTitle = "ATR Engineer (1) - DAT";
    StartDate = "2023-04-27 00:00:00";
    StatusDate = "2023-04-27 14:53:49.957000";
    CurrencyName = "EUR";
    CurrencySymbol = "€";
    Category = "F2R Jobs";
    PublishedJobDescription = "First2 Resource behalf of DAT Airlines is looking for ATR MX.\r\n\r\nREQUIREMENTS:\r\n\r\n•\tValid Aircraft Engineer License, EASA Part 66 B1 or CAT A as minimum. B2 is also preferable.\r\n•\t6 months relevant experience in the last 2 consecutive years on ATR family aircrafts.\r\n•\tDeep knowledge of aircraft maintenance and operation.\r\n•\tValid certificates of HF, FTS and EWIS.\r\n•\tCitizenship of EU or other countries of Schengen area.\r\n•\tMust have a valid driver license & can pass the security clearance to access the airport\r\n\r\nPERSONAL QUANTITIES:\r\n\r\n•\tHigh sense of commitment and responsibility\r\n•\tAble to deal with various tasks in timely manner \r\n•\tVery good communication skills both oral and written English is essential \r\n•\tGood knowledge or ability to use software related to Aircraft Maintenance\r\n•\tAbility to learn\r\n\r\nWHAT WE OFFER:\r\n\r\n•\tCompetetive Fees\r\n•\tContract for 1 year with possibility to extend\r\n•\tWork Pattern: from 14/14 to 21/12 shift pattern or as agreed\r\n\r\nOnly successful candidates will be contacted.";
    CreatedOn = "2023-04-27 14:48:50.263000";
    NoOfPlaces = "6";
    EmploymentType = "Contract";
    Salary = "0E-7";
    MinBasic = "0E-7";
    MaxBasic = "0E-7";
    MinPackage = "0E-7";
    MaxPackage = "0E-7";
    JobRefNo = "J875";
}

async function main() {
    const vacanciesList = document.getElementById("vacancies-list");
    /** @type {Vacancy[]} */
    const vacancies = await fetch(VACANCIES_ENDPOINT).then(rs => rs.json());
    for (const vacancy of vacancies) {
        const card = document.createElement("div");
        vacanciesList.appendChild(card);

        const h2 = document.createElement("h2");
        card.appendChild(h2);

        const a = document.createElement("a");
        h2.appendChild(a);
        a.textContent = vacancy.JobTitle;
        a.setAttribute("href", "./onboarding.html?jobId=" + vacancy.JobId);

        const welcomeTextDiv = document.createElement("div");
        card.appendChild(welcomeTextDiv);
        welcomeTextDiv.classList.add("onboarding-welcome-text");
        welcomeTextDiv.textContent = vacancy.PublishedJobDescription;
    }
    vacanciesList.classList.remove("loading");
}

main().catch(error => {
    console.error(error);
    alert("Failed to initialize page!");
});
