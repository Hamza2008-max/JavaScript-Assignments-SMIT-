/* Student Portal data and small UI helpers. Data is stored locally so the demo
   works without a server and changes stay available after a page refresh. */
(function () {
  'use strict';

  const STORAGE_KEY = 'studentPortal.students.v2';
  const defaultPhoto = 'https://api.dicebear.com/9.x/initials/svg?backgroundColor=1d4ed8&textColor=ffffff&seed=';

  const seedStudents = [
    { id: 201, name: 'Ayesha Khan', batch: 'Batch 2024', gender: 'female', age: 19, attendance: 92, attendanceState: 'Present', status: 'Active', email: 'ayesha@example.com', phone: '+92 300 111 1111', department: 'Computer Science', address: 'Lahore, Pakistan', photo: 'https://randomuser.me/api/portraits/women/68.jpg', grade: 'A', notes: 'Dependable student with excellent participation and project work.' },
    { id: 202, name: 'Rohan Sharma', batch: 'Batch 2024', gender: 'male', age: 20, attendance: 88, attendanceState: 'Present', status: 'Active', email: 'rohan@example.com', phone: '+92 301 222 2222', department: 'Business Studies', address: 'Karachi, Pakistan', photo: 'https://randomuser.me/api/portraits/men/45.jpg', grade: 'B+', notes: 'Shows good potential and responds well to weekly guidance.' },
    { id: 203, name: 'Priya Singh', batch: 'Batch 2024', gender: 'female', age: 19, attendance: 95, attendanceState: 'Present', status: 'Active', email: 'priya@example.com', phone: '+92 302 333 3333', department: 'Economics', address: 'Islamabad, Pakistan', photo: 'https://randomuser.me/api/portraits/women/65.jpg', grade: 'A+', notes: 'Organized learner who contributes regularly to class discussions.' },
    { id: 204, name: 'Vikram Patel', batch: 'Batch 2024', gender: 'male', age: 21, attendance: 84, attendanceState: 'Absent', status: 'Active', email: 'vikram@example.com', phone: '+92 303 444 4444', department: 'Mechanical Engineering', address: 'Peshawar, Pakistan', photo: 'https://randomuser.me/api/portraits/men/57.jpg', grade: 'B', notes: 'Focused student with steady progress in academic tasks.' },
    { id: 205, name: 'Meera Das', batch: 'Batch 2023', gender: 'female', age: 20, attendance: 90, attendanceState: 'Absent', status: 'On leave', email: 'meera@example.com', phone: '+92 304 555 5555', department: 'Arts & Design', address: 'Quetta, Pakistan', photo: 'https://randomuser.me/api/portraits/women/44.jpg', grade: 'A-', notes: 'Creative learner with excellent presentation skills.' },
    { id: 206, name: 'Arjun Verma', batch: 'Batch 2024', gender: 'male', age: 19, attendance: 87, attendanceState: 'Present', status: 'Active', email: 'arjun@example.com', phone: '+92 305 666 6666', department: 'Physics', address: 'Hyderabad, Pakistan', photo: 'https://randomuser.me/api/portraits/men/12.jpg', grade: 'B', notes: 'Curious student who enjoys analytical problems.' },
    { id: 207, name: 'Sana Iqbal', batch: 'Batch 2023', gender: 'female', age: 18, attendance: 91, attendanceState: 'Present', status: 'Active', email: 'sana@example.com', phone: '+92 306 777 7777', department: 'English', address: 'Multan, Pakistan', photo: 'https://randomuser.me/api/portraits/women/21.jpg', grade: 'A', notes: 'Confident communicator with excellent writing and presentation skills.' },
    { id: 208, name: 'Daniel Mathew', batch: 'Batch 2024', gender: 'male', age: 20, attendance: 86, attendanceState: 'Present', status: 'Active', email: 'daniel@example.com', phone: '+92 307 888 8888', department: 'Computer Science', address: 'Faisalabad, Pakistan', photo: 'https://randomuser.me/api/portraits/men/32.jpg', grade: 'B', notes: 'Shows technical talent and enthusiasm for hands-on learning.' },
    { id: 209, name: 'Fatima Noor', batch: 'Batch 2023', gender: 'female', age: 19, attendance: 93, attendanceState: 'Present', status: 'Active', email: 'fatima@example.com', phone: '+92 308 999 9999', department: 'Mathematics', address: 'Sukkur, Pakistan', photo: 'https://randomuser.me/api/portraits/women/34.jpg', grade: 'A', notes: 'Known for precision, discipline, and strong academic focus.' },
    { id: 210, name: 'Mohit Kumar', batch: 'Batch 2022', gender: 'male', age: 22, attendance: 89, attendanceState: 'Absent', status: 'Active', email: 'mohit@example.com', phone: '+92 309 101 0101', department: 'History', address: 'Rawalpindi, Pakistan', photo: 'https://randomuser.me/api/portraits/men/77.jpg', grade: 'B+', notes: 'Calm and thoughtful participant with good judgment.' },
    { id: 211, name: 'Nisha Rao', batch: 'Batch 2024', gender: 'female', age: 20, attendance: 85, attendanceState: 'Present', status: 'Active', email: 'nisha@example.com', phone: '+92 310 121 2121', department: 'Biology', address: 'Larkana, Pakistan', photo: 'https://randomuser.me/api/portraits/women/55.jpg', grade: 'B', notes: 'Diligent student who works hard to keep up with practical labs.' },
    { id: 212, name: 'Omar Ali', batch: 'Batch 2023', gender: 'male', age: 21, attendance: 94, attendanceState: 'Present', status: 'Active', email: 'omar@example.com', phone: '+92 311 131 3131', department: 'Chemistry', address: 'Gujranwala, Pakistan', photo: 'https://randomuser.me/api/portraits/men/88.jpg', grade: 'A', notes: 'Reliable learner who contributes thoughtfully during lab sessions.' }
  ];

  function readStudents() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved) && saved.length) return saved;
    } catch (error) {
      console.warn('Could not read student data.', error);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedStudents));
    return seedStudents.slice();
  }

  function writeStudents(students) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  }

  function placeholder(name) {
    return `${defaultPhoto}${encodeURIComponent(name || 'Student')}`;
  }

  function initials(name) {
    return String(name || 'Student').split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
  }

  window.StudentPortal = {
    getStudents: readStudents,
    saveStudents: writeStudents,
    escapeHTML,
    placeholder,
    initials,
    resetDemoData() { localStorage.removeItem(STORAGE_KEY); return readStudents(); }
  };
})();

/* Dashboard interactions */
(() => {
      'use strict';
      if (!document.querySelector('#app-layout')) return;
      const portal = window.StudentPortal;
      let students = portal.getStudents();
      let selectedId = students[0] ? students[0].id : null;
      let lastFocusedElement = null;
      const state = { query: '', batch: '', gender: '', status: '', attendance: '' };
      const $ = selector => document.querySelector(selector);
      const escape = portal.escapeHTML;
      const image = student => escape(student.photo || portal.placeholder(student.name));
      window.avatarFallback = event => { event.currentTarget.src = portal.placeholder(event.currentTarget.alt); };
      function badgeClass(status) { return String(status).toLowerCase().replace(/\s+/g, '-'); }
      function gradeIsTop(grade) { return ['A+', 'A', 'A-'].includes(grade); }
      function notify(message, type = 'success') {
        const toast = document.createElement('div'); toast.className = `toast-message ${type}`;
        toast.innerHTML = `<span>${type === 'success' ? '&#10003;' : '!'}</span><p>${escape(message)}</p><button type="button" aria-label="Dismiss notification">&#215;</button>`;
        $('#toast-region').append(toast); toast.querySelector('button').addEventListener('click', () => toast.remove()); window.setTimeout(() => toast.remove(), 4200);
      }
      function filteredStudents() {
        const query = state.query.trim().toLowerCase();
        return students.filter(student => {
          const haystack = `${student.name} ${student.id} ${student.email} ${student.department}`.toLowerCase();
          return (!query || haystack.includes(query)) && (!state.batch || student.batch === state.batch) && (!state.gender || student.gender === state.gender) && (!state.status || student.status === state.status) && (!state.attendance || (state.attendance === 'below-85' ? student.attendance < 85 : student.attendance >= 85));
        });
      }
      function renderMetrics() {
        const total = students.length, present = students.filter(s => s.attendanceState === 'Present').length, attention = students.filter(s => s.attendance < 85).length, top = students.filter(s => gradeIsTop(s.grade)).length;
        $('#metric-total').textContent = total; $('#welcome-total').textContent = total; $('#metric-total-note').textContent = `${students.filter(s => s.status === 'Active').length} active learners`; $('#metric-present').textContent = present; $('#metric-present-note').textContent = total ? `${Math.round((present / total) * 100)}% of roster` : '0% of roster'; $('#metric-attention').textContent = attention; $('#metric-top').textContent = top;
      }
      function renderSpotlight() {
        const student = students.find(item => item.id === selectedId) || students[0]; if (!student) { $('#student-spotlight').innerHTML = ''; return; } selectedId = student.id;
        const attendanceTone = student.attendance < 85 ? 'warning' : 'good';
        $('#student-spotlight').innerHTML = `<div class="spotlight-label"><span class="pulse-dot"></span> Student spotlight</div><div class="spotlight-content"><img class="spotlight-avatar" src="${image(student)}" alt="${escape(student.name)}" onerror="avatarFallback(event)"><div class="spotlight-main"><p class="eyebrow">ID #${escape(student.id)}</p><h2>${escape(student.name)}</h2><p>${escape(student.department)} &middot; ${escape(student.batch)}</p><div class="spotlight-meta"><span class="status-badge ${badgeClass(student.status)}">${escape(student.status)}</span><span class="attendance-indicator ${attendanceTone}">${escape(student.attendance)}% attendance</span><span>Grade ${escape(student.grade)}</span></div></div><div class="spotlight-actions"><button type="button" class="button button-secondary" data-action="edit" data-id="${student.id}">Edit profile</button><a class="button button-primary" href="student-details.html?id=${student.id}">View details <span aria-hidden="true">&#8594;</span></a></div></div>`;
      }
      function renderCards() {
        const visible = filteredStudents(); $('#result-count').textContent = `(${visible.length})`;
        $('#student-grid').innerHTML = visible.map(student => `<article class="student-card" data-id="${student.id}"><div class="student-card-head"><img src="${image(student)}" alt="${escape(student.name)}" onerror="avatarFallback(event)"><span class="status-badge ${badgeClass(student.status)}">${escape(student.status)}</span></div><div class="student-card-body"><p class="student-id">ID #${escape(student.id)}</p><h3>${escape(student.name)}</h3><p>${escape(student.department)}</p><div class="student-card-stats"><span><b>${escape(student.attendance)}%</b> attendance</span><span><b>${escape(student.grade)}</b> grade</span></div></div><footer><button class="text-button" type="button" data-action="spotlight" data-id="${student.id}">Quick view</button><a class="text-button" href="student-details.html?id=${student.id}">Details <span aria-hidden="true">&#8594;</span></a><button class="card-edit" type="button" data-action="edit" data-id="${student.id}" aria-label="Edit ${escape(student.name)}">&#9998;</button></footer></article>`).join('');
        $('#empty-state').hidden = visible.length !== 0; $('#filter-dot').hidden = !Object.values(state).some(Boolean); renderActiveFilters();
      }
      function renderActiveFilters() {
        const labels = { batch: 'Batch', gender: 'Gender', status: 'Status', attendance: 'Attendance' }; const values = { ...state, attendance: state.attendance === 'below-85' ? 'Below 85%' : state.attendance === '85-plus' ? '85% and above' : '' }; const active = Object.entries(values).filter(([key, value]) => key !== 'query' && value);
        $('#active-filters').hidden = active.length === 0; $('#active-filters').innerHTML = active.map(([key, value]) => `<span class="filter-tag">${labels[key]}: ${escape(value)}<button type="button" data-action="remove-filter" data-filter="${key}" aria-label="Remove ${labels[key]} filter">&#215;</button></span>`).join('') + (active.length ? '<button class="clear-link" type="button" data-action="clear-filters">Clear all</button>' : '');
      }
      function renderAttendance() {
        $('#attendance-body').innerHTML = students.map(student => `<tr><td><div class="table-student"><img src="${image(student)}" alt="" onerror="avatarFallback(event)"><div><strong>${escape(student.name)}</strong><small>#${escape(student.id)} &middot; ${escape(student.department)}</small></div></div></td><td>${escape(student.batch)}</td><td><span class="attendance-bar"><i style="width:${Math.min(100, Math.max(0, Number(student.attendance) || 0))}%"></i></span><b>${escape(student.attendance)}%</b></td><td><span class="today-status ${student.attendanceState.toLowerCase()}"><i></i>${escape(student.attendanceState)}</span></td><td><button class="table-action" type="button" data-action="toggle-attendance" data-id="${student.id}">Mark ${student.attendanceState === 'Present' ? 'absent' : 'present'}</button></td></tr>`).join('');
      }
      function renderAll() { renderMetrics(); renderSpotlight(); renderCards(); renderAttendance(); }
      function uniqueOptions(key) { return [...new Set(students.map(student => student[key]).filter(Boolean))].sort(); }
      function optionList(options, selected, placeholder) { return `<option value="">${placeholder}</option>` + options.map(value => `<option value="${escape(value)}" ${value === selected ? 'selected' : ''}>${escape(value)}</option>`).join(''); }
      function openDrawer(title, eyebrow, body) { lastFocusedElement = document.activeElement; $('#drawer-title').textContent = title; $('#drawer-eyebrow').textContent = eyebrow; $('#drawer-content').innerHTML = body; $('#drawer-backdrop').hidden = false; $('#drawer').setAttribute('aria-hidden', 'false'); document.body.classList.add('drawer-open'); window.setTimeout(() => $('#drawer').focus(), 0); }
      function closeDrawer() { $('#drawer').setAttribute('aria-hidden', 'true'); document.body.classList.remove('drawer-open'); window.setTimeout(() => { $('#drawer-backdrop').hidden = true; $('#drawer-content').innerHTML = ''; }, 220); if (lastFocusedElement) lastFocusedElement.focus(); }
      function studentForm(student = {}) {
        const editing = Boolean(student.id);
        return `<form id="student-form" class="portal-form" novalidate data-mode="${editing ? 'edit' : 'add'}" data-id="${editing ? student.id : ''}"><div class="form-notice">${editing ? 'Changes will update this student everywhere in the portal.' : 'A unique ID is created automatically when you save.'}</div><div class="form-row"><label>Full name <span>*</span><input name="name" required maxlength="70" value="${escape(student.name || '')}" placeholder="e.g. Ali Raza"></label><label>Student email <span>*</span><input name="email" required type="email" maxlength="100" value="${escape(student.email || '')}" placeholder="student@example.com"></label></div><div class="form-row"><label>Batch <span>*</span><input name="batch" required maxlength="30" value="${escape(student.batch || 'Batch 2024')}" placeholder="Batch 2024"></label><label>Department <span>*</span><input name="department" required maxlength="60" value="${escape(student.department || '')}" placeholder="Computer Science"></label></div><div class="form-row"><label>Gender <select name="gender"><option value="female" ${student.gender === 'female' ? 'selected' : ''}>Female</option><option value="male" ${student.gender === 'male' ? 'selected' : ''}>Male</option><option value="other" ${student.gender === 'other' ? 'selected' : ''}>Other / prefer not to say</option></select></label><label>Age <input name="age" type="number" required min="14" max="80" value="${escape(student.age || '')}" placeholder="18"></label></div><div class="form-row"><label>Attendance % <input name="attendance" type="number" required min="0" max="100" value="${escape(student.attendance ?? 85)}"></label><label>Current grade <select name="grade">${optionList(['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'], student.grade || 'B', 'Select grade')}</select></label></div><div class="form-row"><label>Status <select name="status">${optionList(['Active', 'On leave', 'Inactive'], student.status || 'Active', 'Select status')}</select></label><label>Phone <input name="phone" maxlength="35" value="${escape(student.phone || '')}" placeholder="+92 300 000 0000"></label></div><label>Address <input name="address" maxlength="100" value="${escape(student.address || '')}" placeholder="City, Pakistan"></label><label>Profile image <input name="photo" type="file" accept="image/*"><small>Optional. Use a JPG, PNG, or WebP image under 2 MB.</small></label><label>Notes <textarea name="notes" maxlength="300" rows="3" placeholder="Add helpful notes about the student">${escape(student.notes || '')}</textarea></label><div class="drawer-footer"><button class="button button-secondary" type="button" data-action="close-drawer">Cancel</button><button class="button button-primary" id="student-submit" type="submit">${editing ? 'Save changes' : 'Add student'}</button></div></form>`;
      }
      function openStudentForm(id) { const student = students.find(item => item.id === Number(id)); openDrawer(student ? 'Edit student' : 'Add a student', student ? `Editing #${student.id}` : 'New learner profile', studentForm(student)); }
      function openFilter() { openDrawer('Filter students', 'Refine your roster', `<form id="filter-form" class="portal-form"><label>Batch <select name="batch">${optionList(uniqueOptions('batch'), state.batch, 'All batches')}</select></label><label>Enrollment status <select name="status">${optionList(uniqueOptions('status'), state.status, 'All statuses')}</select></label><label>Gender <select name="gender"><option value="">All genders</option><option value="female" ${state.gender === 'female' ? 'selected' : ''}>Female</option><option value="male" ${state.gender === 'male' ? 'selected' : ''}>Male</option><option value="other" ${state.gender === 'other' ? 'selected' : ''}>Other / prefer not to say</option></select></label><label>Attendance <select name="attendance"><option value="">Any attendance</option><option value="85-plus" ${state.attendance === '85-plus' ? 'selected' : ''}>85% and above</option><option value="below-85" ${state.attendance === 'below-85' ? 'selected' : ''}>Below 85%</option></select></label><div class="drawer-footer"><button class="button button-secondary" type="button" data-action="clear-filters">Clear all</button><button class="button button-primary" type="submit">Apply filters</button></div></form>`); }
      async function getPhoto(file, name) { if (!file) return portal.placeholder(name); if (!file.type.startsWith('image/') || file.size > 2 * 1024 * 1024) throw new Error('Please select an image under 2 MB.'); return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(new Error('The image could not be read.')); reader.readAsDataURL(file); }); }
      function setLoading(button, isLoading, label) { button.disabled = isLoading; button.innerHTML = isLoading ? '<span class="button-spinner"></span> Saving...' : label; }
      async function saveStudent(form) {
        if (!form.reportValidity()) return; const submit = $('#student-submit'), editing = form.dataset.mode === 'edit', label = editing ? 'Save changes' : 'Add student', values = Object.fromEntries(new FormData(form).entries());
        try { setLoading(submit, true, label); const existing = students.find(item => item.id === Number(form.dataset.id)), photoFile = form.elements.photo.files[0]; const data = { ...existing, ...values, age: Number(values.age), attendance: Number(values.attendance), photo: photoFile ? await getPhoto(photoFile, values.name) : (existing?.photo || portal.placeholder(values.name)) }; if (editing) { students = students.map(item => item.id === existing.id ? { ...data, id: existing.id } : item); selectedId = existing.id; } else { const id = Math.max(200, ...students.map(item => Number(item.id))) + 1; students.push({ ...data, id, attendanceState: 'Present' }); selectedId = id; } portal.saveStudents(students); renderAll(); closeDrawer(); notify(editing ? 'Student profile updated.' : 'Student added to the roster.'); } catch (error) { notify(error.message || 'Could not save the student.', 'error'); setLoading(submit, false, label); }
      }
      function clearFilters() { Object.assign(state, { query: '', batch: '', gender: '', status: '', attendance: '' }); $('#student-search').value = ''; renderCards(); closeDrawer(); }
      document.addEventListener('click', event => { const button = event.target.closest('[data-action]'); if (!button) return; const { action, id, filter } = button.dataset; if (action === 'open-add') openStudentForm(); if (action === 'edit') openStudentForm(id); if (action === 'open-filter') openFilter(); if (action === 'close-drawer') closeDrawer(); if (action === 'logout') localStorage.removeItem('studentPortal.signedIn'); if (action === 'spotlight') { selectedId = Number(id); renderSpotlight(); $('#student-spotlight').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } if (action === 'toggle-attendance') { const student = students.find(item => item.id === Number(id)); if (student) { student.attendanceState = student.attendanceState === 'Present' ? 'Absent' : 'Present'; portal.saveStudents(students); renderMetrics(); renderAttendance(); notify(`${student.name} marked ${student.attendanceState.toLowerCase()}.`); } } if (action === 'clear-filters') clearFilters(); if (action === 'remove-filter') { state[filter] = ''; renderCards(); } });
      $('#student-search').addEventListener('input', event => { state.query = event.target.value; renderCards(); }); $('#drawer-close').addEventListener('click', closeDrawer); $('#drawer-backdrop').addEventListener('click', closeDrawer); $('#mobile-menu').addEventListener('click', () => { const open = $('#app-layout').classList.toggle('menu-open'); $('#mobile-menu').setAttribute('aria-expanded', String(open)); });
      $('#reset-data').addEventListener('click', () => { if (window.confirm('Restore the original sample students? Your additions and edits will be removed.')) { students = portal.resetDemoData(); selectedId = students[0]?.id; clearFilters(); renderAll(); notify('Sample data restored.'); } });
      document.addEventListener('submit', event => { if (event.target.id === 'student-form') { event.preventDefault(); saveStudent(event.target); } if (event.target.id === 'filter-form') { event.preventDefault(); Object.assign(state, Object.fromEntries(new FormData(event.target).entries())); renderCards(); closeDrawer(); notify('Filters applied.'); } }); document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('#drawer').getAttribute('aria-hidden') === 'false') closeDrawer(); });
      document.querySelectorAll('.nav-item').forEach(link => link.addEventListener('click', () => { document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); link.classList.add('active'); $('#app-layout').classList.remove('menu-open'); $('#mobile-menu').setAttribute('aria-expanded', 'false'); }));
      renderAll();
      const editId = Number(new URLSearchParams(window.location.search).get('edit'));
      if (students.some(student => student.id === editId)) window.setTimeout(() => openStudentForm(editId), 60);
      window.setTimeout(() => $('#page-loader').classList.add('is-hidden'), 300);
    })();

/* Student detail interactions */
(() => {
      'use strict';
      if (!document.querySelector('#detail-page')) return;
      const portal = window.StudentPortal;
      const $ = selector => document.querySelector(selector);
      const escape = portal.escapeHTML;
      const params = new URLSearchParams(window.location.search);
      const students = portal.getStudents();
      const id = Number(params.get('id')) || students[0]?.id;
      const student = students.find(item => item.id === id);
      window.avatarFallback = event => { event.currentTarget.src = portal.placeholder(event.currentTarget.alt); };
      function badgeClass(status) { return String(status).toLowerCase().replace(/\s+/g, '-'); }
      function notify(message) { const toast = document.createElement('div'); toast.className = 'toast-message success'; toast.innerHTML = `<span>&#10003;</span><p>${escape(message)}</p><button type="button" aria-label="Dismiss notification">&#215;</button>`; $('#toast-region').append(toast); toast.querySelector('button').addEventListener('click', () => toast.remove()); window.setTimeout(() => toast.remove(), 4200); }
      function scoreFromAttendance(offset) { return Math.max(65, Math.min(99, Math.round(student.attendance + offset))); }
      function gradeFor(score) { return score >= 92 ? 'A+' : score >= 86 ? 'A' : score >= 80 ? 'A-' : score >= 75 ? 'B+' : 'B'; }
      function renderTables() {
        const assignmentScore = scoreFromAttendance(-2), quizScore = scoreFromAttendance(1), projectScore = scoreFromAttendance(3);
        return {
          assignments: `<div class="table-scroll"><table class="detail-table"><thead><tr><th>Assignment</th><th>Due date</th><th>Status</th><th>Score</th></tr></thead><tbody><tr><td>Portfolio foundations</td><td>10 Sep</td><td><span class="submission submitted">Submitted</span></td><td>${assignmentScore}/100</td></tr><tr><td>Research reflection</td><td>17 Sep</td><td><span class="submission submitted">Submitted</span></td><td>${Math.max(65, assignmentScore - 4)}/100</td></tr><tr><td>Final course project</td><td>02 Oct</td><td><span class="submission pending">In progress</span></td><td>&mdash;</td></tr></tbody></table></div>`,
          quizzes: `<div class="table-scroll"><table class="detail-table"><thead><tr><th>Quiz</th><th>Topic</th><th>Date</th><th>Score</th></tr></thead><tbody><tr><td>Quiz 01</td><td>Course fundamentals</td><td>04 Sep</td><td>${Math.round(quizScore / 5)}/20</td></tr><tr><td>Quiz 02</td><td>Applied concepts</td><td>11 Sep</td><td>${Math.round((quizScore - 2) / 5)}/20</td></tr><tr><td>Quiz 03</td><td>Problem solving</td><td>18 Sep</td><td>${Math.round((quizScore + 1) / 5)}/20</td></tr></tbody></table></div>`,
          results: `<div class="table-scroll"><table class="detail-table"><thead><tr><th>Assessment</th><th>Course area</th><th>Score</th><th>Grade</th></tr></thead><tbody><tr><td>Mid-term review</td><td>${escape(student.department)}</td><td>${Math.max(65, projectScore - 5)}/100</td><td>${gradeFor(projectScore - 5)}</td></tr><tr><td>Practical assessment</td><td>Applied learning</td><td>${projectScore}/100</td><td>${gradeFor(projectScore)}</td></tr><tr><td>Current average</td><td>All modules</td><td>${student.attendance}/100</td><td>${escape(student.grade)}</td></tr></tbody></table></div>`
        };
      }
      function renderMissing() {
        $('#student-record').innerHTML = `<section class="missing-record"><div class="empty-icon">!</div><p class="eyebrow accent">Record unavailable</p><h1>We couldn't find that student.</h1><p>The profile may have been removed, or the link is no longer valid.</p><a href="dashboard.html" class="button button-primary">Return to dashboard</a></section>`;
      }
      function renderRecord() {
        const tables = renderTables();
        $('#student-record').innerHTML = `<section class="detail-hero"><div class="detail-hero-main"><div class="detail-avatar-wrap"><img src="${escape(student.photo || portal.placeholder(student.name))}" alt="${escape(student.name)}" onerror="avatarFallback(event)"><span class="status-dot ${badgeClass(student.status)}" title="${escape(student.status)}"></span></div><div><p class="eyebrow accent">Student profile &middot; ID #${escape(student.id)}</p><h1>${escape(student.name)}</h1><p class="detail-description">${escape(student.notes || 'No additional notes have been added for this student yet.')}</p><div class="detail-badges"><span class="status-badge ${badgeClass(student.status)}">${escape(student.status)}</span><span>${escape(student.department)}</span><span>${escape(student.batch)}</span></div></div></div><div class="detail-hero-actions"><a class="button button-secondary" href="dashboard.html?edit=${student.id}#students">Edit in dashboard</a><button class="button button-primary" type="button" id="copy-link">Copy profile link</button></div></section>
          <section class="quick-facts" aria-label="Student quick facts"><article><span>Attendance</span><strong>${escape(student.attendance)}%</strong><small class="${student.attendance < 85 ? 'negative' : 'positive'}">${student.attendance < 85 ? 'Needs follow-up' : 'On track'}</small></article><article><span>Current grade</span><strong>${escape(student.grade)}</strong><small>Current term</small></article><article><span>Today</span><strong class="today-word ${student.attendanceState.toLowerCase()}">${escape(student.attendanceState)}</strong><small>Attendance marked</small></article><article><span>Age</span><strong>${escape(student.age || 'â€”')}</strong><small>Years old</small></article></section>
          <div class="detail-columns"><section class="detail-card"><header><p class="eyebrow">Contact & enrollment</p><h2>Student information</h2></header><dl class="information-list"><div><dt>Email</dt><dd><a href="mailto:${escape(student.email)}">${escape(student.email)}</a></dd></div><div><dt>Phone</dt><dd>${escape(student.phone || 'Not provided')}</dd></div><div><dt>Address</dt><dd>${escape(student.address || 'Not provided')}</dd></div><div><dt>Gender</dt><dd>${escape(student.gender ? student.gender.charAt(0).toUpperCase() + student.gender.slice(1) : 'Not provided')}</dd></div></dl></section><section class="detail-card performance-card"><header><p class="eyebrow">Academic health</p><h2>Performance overview</h2></header><div class="performance-score"><strong>${escape(student.grade)}</strong><span>Current grade</span></div><div class="progress-row"><span>Overall attendance</span><b>${escape(student.attendance)}%</b></div><div class="progress-track"><i style="width:${Math.min(100, Math.max(0, Number(student.attendance) || 0))}%"></i></div><p>Attendance and current-term results are synchronized with the dashboard.</p></section></div>
          <section class="academic-card"><header><div><p class="eyebrow">Academic record</p><h2>Recent work</h2></div><div class="tab-list" role="tablist" aria-label="Academic record sections"><button class="detail-tab active" type="button" data-tab="assignments" role="tab" aria-selected="true">Assignments</button><button class="detail-tab" type="button" data-tab="quizzes" role="tab" aria-selected="false">Quizzes</button><button class="detail-tab" type="button" data-tab="results" role="tab" aria-selected="false">Results</button></div></header><div id="academic-content">${tables.assignments}</div></section>`;
        document.title = `${student.name} | Student Portal`;
        document.querySelectorAll('.detail-tab').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.detail-tab').forEach(tab => { tab.classList.toggle('active', tab === button); tab.setAttribute('aria-selected', String(tab === button)); }); $('#academic-content').innerHTML = tables[button.dataset.tab]; }));
        $('#copy-link').addEventListener('click', async event => { const button = event.currentTarget; try { await navigator.clipboard.writeText(window.location.href); button.textContent = 'Link copied'; notify('Profile link copied to clipboard.'); window.setTimeout(() => { button.textContent = 'Copy profile link'; }, 1600); } catch { notify('Copy the link from your browser address bar.'); } });
      }
      if (student) renderRecord(); else renderMissing();
      window.setTimeout(() => $('#page-loader').classList.add('is-hidden'), 260);
    })();

/* Login interactions */
(() => {
      if (!document.querySelector('#login-form')) return;
      const form = document.querySelector('#login-form');
      const error = document.querySelector('#login-error');
      const submit = document.querySelector('#login-submit');
      const password = document.querySelector('#password');
      const toggle = document.querySelector('#password-toggle');
      toggle.addEventListener('click', () => { const visible = password.type === 'text'; password.type = visible ? 'password' : 'text'; toggle.textContent = visible ? 'Show' : 'Hide'; toggle.setAttribute('aria-label', visible ? 'Show password' : 'Hide password'); password.focus(); });
      form.addEventListener('submit', event => {
        event.preventDefault(); error.classList.remove('visible');
        if (!form.reportValidity()) return;
        const username = form.username.value.trim(); const pass = form.password.value;
        if (username.toLowerCase() !== 'admin' || pass !== '1234') { error.textContent = 'Those credentials do not match the demo account. Try Admin and 1234.'; error.classList.add('visible'); password.select(); return; }
        submit.disabled = true; submit.innerHTML = '<span class="button-spinner"></span> Signing in...';
        localStorage.setItem('studentPortal.signedIn', 'true');
        window.setTimeout(() => { window.location.href = 'dashboard.html'; }, 450);
      });
    })();

