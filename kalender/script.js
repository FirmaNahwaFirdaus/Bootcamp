const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const calendar = document.getElementById('calendar');

const months = [
  'Januari', 'Februari', 'Maret', 'April',
  'Mei', 'Juni', 'Juli', 'Agustus',
  'September', 'Oktober', 'November', 'Desember'
];

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

for (let y = 2000; y <= 2025; y++) {
  const option = document.createElement('option');
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

months.forEach((month, idx) => {
  const option = document.createElement('option');
  option.value = idx;
  option.textContent = month;
  monthSelect.appendChild(option);
});

function generateCalendar() {
  calendar.innerHTML = '';

  days.forEach(day => {
    const dayLabel = document.createElement('div');
    dayLabel.className = 'day label'; 
    dayLabel.textContent = day;
    calendar.appendChild(dayLabel);
  });

  for (let i = 1; i <= 30; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.textContent = i;
    calendar.appendChild(dayDiv);
  }
}

yearSelect.addEventListener('change', generateCalendar);
monthSelect.addEventListener('change', generateCalendar);

yearSelect.value = 2025;
monthSelect.value = 0;
generateCalendar();
