const userProfile = {
    name: 'Azamat Askar',
    birthYear: 2005,
    isDeveloper: true,
    hobbies: ['Coding', 'Sports', 'Music', 'Reading']
};

const profileName = document.getElementById('profileName');
const profileBirthYear = document.getElementById('profileBirthYear');
const profileDeveloper = document.getElementById('profileDeveloper');
const profileHobbies = document.getElementById('profileHobbies');
const profileAge = document.getElementById('profileAge');
const profileMonths = document.getElementById('profileMonths');
const profileHobbiesCount = document.getElementById('profileHobbiesCount');

const profileForm = document.getElementById('profileForm');
const usernameInput = document.getElementById('usernameInput');
const birthYearInput = document.getElementById('birthYearInput');
const isDeveloperInput = document.getElementById('isDeveloperInput');
const formResult = document.getElementById('formResult');

const hobbyList = document.getElementById('hobbyList');
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const listResult = document.getElementById('listResult');

const updateProfileView = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const monthsOld = age * 12;
    const hobbiesCount = userProfile.hobbies.length;

    profileName.textContent = userProfile.name;
    profileBirthYear.textContent = userProfile.birthYear;
    profileDeveloper.textContent = userProfile.isDeveloper ? 'Yes (true)' : 'No (false)';
    profileHobbies.textContent = userProfile.hobbies.join(', ');

    profileAge.textContent = age;
    profileMonths.textContent = monthsOld;
    profileHobbiesCount.textContent = hobbiesCount;

    console.log('userProfile:', userProfile);
    console.log('Current Age:', age, '| Months Old:', monthsOld, '| Total Hobbies:', hobbiesCount);
};

const renderList = () => {
    hobbyList.innerHTML = '';
    userProfile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbyList.appendChild(li);
    });
};

profileForm.addEventListener('submit', event => {
    event.preventDefault();

    const nameValue = usernameInput.value.trim();
    const yearValue = Number(birthYearInput.value);

    if (!nameValue || !yearValue) {
        formResult.textContent = 'Please fill in both Username and Birth Year.';
        return;
    }

    userProfile.name = nameValue;
    userProfile.birthYear = yearValue;
    userProfile.isDeveloper = isDeveloperInput.checked;

    updateProfileView();
    formResult.textContent = 'Success! Profile has been updated.';
});

addItemBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();

    if (!text) {
        listResult.textContent = 'Please enter an item name first.';
        return;
    }

    userProfile.hobbies.push(text);

    const li = document.createElement('li');
    li.textContent = text;
    hobbyList.appendChild(li);

    itemInput.value = '';
    updateProfileView();
    listResult.textContent = 'Added "' + text + '" to the list.';
});

removeItemBtn.addEventListener('click', () => {
    const lastItem = hobbyList.lastElementChild;

    if (!lastItem) {
        listResult.textContent = 'The list is already empty.';
        return;
    }

    const removed = userProfile.hobbies.pop();
    hobbyList.removeChild(lastItem);

    updateProfileView();
    listResult.textContent = 'Removed "' + removed + '" from the list.';
});

usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;
isDeveloperInput.checked = userProfile.isDeveloper;

renderList();
updateProfileView();
