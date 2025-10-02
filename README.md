<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SoGood - Layanan Laundry Cepat dan Terpercaya</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #3B82F6;
            --primary-hover: #2563EB;
            --success: #10B981;
            --success-light: #ECFDF5;
            --gray-50: #F9FAFB;
            --gray-100: #F3F4F6;
            --gray-200: #E5E7EB;
            --gray-300: #D1D5DB;
            --gray-400: #9CA3AF;
            --gray-500: #6B7280;
            --gray-600: #4B5563;
            --gray-700: #374151;
            --gray-800: #1F2937;
            --gray-900: #111827;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --radius: 0.5rem;
            --radius-lg: 0.75rem;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--gray-50);
            color: var(--gray-800);
            line-height: 1.5;
        }

        .container {
            max-width: 56rem;
            margin: 0 auto;
            padding: 2rem 1rem;
        }

        .card {
            background-color: white;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            overflow: hidden;
        }

        .card-header {
            padding: 2rem 2rem 1rem;
            text-align: center;
            border-bottom: 1px solid var(--gray-200);
        }

        .card-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .card-description {
            color: var(--gray-600);
            font-size: 1.125rem;
            margin-bottom: 1rem;
        }

        .card-content {
            padding: 1.5rem 2rem 2rem;
        }

        .progress-steps {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }

        .step {
            display: flex;
            align-items: center;
        }

        .step-number {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            transition: all 0.3s;
        }

        .step-number.active {
            background-color: var(--primary);
            color: white;
            box-shadow: var(--shadow);
        }

        .step-number.inactive {
            background-color: var(--gray-200);
            color: var(--gray-500);
        }

        .step-connector {
            width: 4rem;
            height: 0.125rem;
            margin: 0 0.5rem;
        }

        .step-connector.active {
            background-color: var(--primary);
        }

        .step-connector.inactive {
            background-color: var(--gray-200);
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gray-800);
            margin-bottom: 1.5rem;
        }

        .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
            .services-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .service-card {
            border: 2px solid var(--gray-200);
            border-radius: var(--radius);
            padding: 1.5rem;
            cursor: pointer;
            transition: all 0.3s;
        }

        .service-card:hover {
            border-color: var(--gray-300);
            box-shadow: var(--shadow-sm);
        }

        .service-card.selected {
            border-color: var(--primary);
            background-color: rgba(59, 130, 246, 0.05);
            box-shadow: var(--shadow);
        }

        .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }

        .service-name {
            font-weight: 600;
            color: var(--gray-800);
        }

        .service-duration {
            font-size: 0.875rem;
            color: var(--gray-500);
        }

        .service-price {
            font-weight: 700;
            color: var(--primary);
            font-size: 1.125rem;
        }

        .selected-badge {
            display: inline-block;
            background-color: var(--primary);
            color: white;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            border-radius: 9999px;
            margin-top: 0.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 0.5rem;
        }

        .form-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            font-size: 1rem;
            transition: all 0.2s;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .summary-box {
            background-color: var(--gray-100);
            padding: 1.5rem;
            border-radius: var(--radius);
            margin-bottom: 1.5rem;
        }

        .summary-title {
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 0.75rem;
        }

        .summary-detail {
            font-size: 0.875rem;
            color: var(--gray-600);
            margin-bottom: 0.25rem;
        }

        .summary-total {
            font-weight: 700;
            color: var(--primary);
            font-size: 1.125rem;
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--gray-300);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: var(--radius);
            cursor: pointer;
            transition: all 0.2s;
            border: none;
        }

        .btn-primary {
            background-color: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background-color: var(--primary-hover);
        }

        .btn-primary:disabled {
            background-color: var(--gray-300);
            cursor: not-allowed;
        }

        .btn-outline {
            background-color: transparent;
            border: 1px solid var(--gray-300);
            color: var(--gray-700);
        }

        .btn-outline:hover {
            background-color: var(--gray-50);
        }

        .btn-success {
            background-color: var(--success);
            color: white;
        }

        .btn-success:hover {
            background-color: #059669;
        }

        .btn-full {
            width: 100%;
        }

        .button-group {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .button-group .btn {
            flex: 1;
        }

        .success-icon {
            width: 5rem;
            height: 5rem;
            background-color: rgba(16, 185, 129, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }

        .success-icon svg {
            width: 2.5rem;
            height: 2.5rem;
            color: var(--success);
        }

        .success-title {
            font-size: 1.875rem;
            font-weight: 700;
            color: var(--gray-800);
            text-align: center;
            margin-bottom: 0.5rem;
        }

        .success-message {
            color: var(--gray-600);
            text-align: center;
            margin-bottom: 2rem;
            max-width: 28rem;
            margin-left: auto;
            margin-right: auto;
        }

        .order-id {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .estimated-time {
            background-color: var(--success-light);
            padding: 1rem;
            border-radius: var(--radius);
            border: 1px solid rgba(16, 185, 129, 0.3);
            text-align: center;
            color: var(--success);
            font-weight: 500;
            margin-top: 1rem;
        }

        .section {
            display: none;
        }

        .section.active {
            display: block;
        }

        .text-center {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">SoGood Laundry</h1>
                <p class="card-description">Layanan laundry cepat dan terpercaya</p>
            </div>

            <div class="card-content">
                <!-- Progress Steps -->
                <div class="progress-steps">
                    <div class="step">
                        <div class="step-number active">1</div>
                    </div>
                    <div class="step">
                        <div class="step-connector active"></div>
                        <div class="step-number">2</div>
                    </div>
                    <div class="step">
                        <div class="step-connector"></div>
                        <div class="step-number">3</div>
                    </div>
                    <div class="step">
                        <div class="step-connector"></div>
                        <div class="step-number">4</div>
                    </div>
                </div>
                   <!-- Step 1: Service Selection -->
                <div id="step1" class="section active">
                    <h2 class="section-title">Pilih Layanan</h2>
                    
                    <div class="services-grid">
                        <div class="service-card selected" data-service="reguler">
                            <div class="service-header">
                                <div>
                                    <h3 class="service-name">Wash & Fold</h3>
                                </div>
                                <div class="service-price">Rp 10.000/kg</div>
                            </div>
                            <div class="selected-badge">Dipilih</div>
                        </div>
                        
                        <div class="service-card" data-service="express">
                            <div class="service-header">
                                <div>
                                    <h3 class="service-name">Wash & Irom</h3>
                                </div>
                                <div class="service-price">Rp 10.000/kg</div>
                            </div>
                        </div>
                        
                        <div class="service-card" data-service="dryclean">
                            <div class="service-header">
                                <div>
                                    <h3 class="service-name">Iron Only</h3>
                                </div>
                                <div class="service-price">Rp 5.000/kg</div>
                            </div>
                        </div>
                        
                    <div class="form-group">
                        <label class="form-label" for="weight">Berat Pakaian (kg)</label>
                        <input type="number" id="weight" class="form-input" min="1" value="1">
                    </div>

                    <div class="summary-box">
                        <h4 class="summary-title">Ringkasan Pesanan</h4>
                        <p class="summary-detail">Wash & Fold</p>
                        <p class="summary-detail">1 kg × Rp 10.000</p>
                        <p class="summary-total">Total: Rp 10.000</p>
                    </div>

                    <button id="nextToStep2" class="btn btn-primary btn-full">Lanjutkan ke Informasi Pelanggan</button>
                </div>

                <!-- Step 2: Customer Information -->
                <div id="step2" class="section">
                    <h2 class="section-title">Informasi Pelanggan</h2>
                    
                    <div class="form-group">
                        <label class="form-label" for="name">Nama Lengkap *</label>
                        <input type="text" id="name" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="phone">Nomor Telepon *</label>
                        <input type="tel" id="phone" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="address">Alamat Penjemputan *</label>
                        <input type="text" id="address" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="notes">Catatan Khusus (opsional)</label>
                        <input type="text" id="notes" class="form-input">
                    </div>

                    <div class="button-group">
                        <button id="backToStep1" class="btn btn-outline">Kembali</button>
                        <button id="nextToStep3" class="btn btn-primary">Lanjutkan ke Konfirmasi</button>
                    </div>
                </div>

                <!-- Step 3: Order Confirmation -->
                <div id="step3" class="section">
                    <h2 class="section-title">Konfirmasi Pesanan</h2>
                    
                    <div class="card" style="margin-bottom: 1.5rem;">
                        <div class="card-header" style="background-color: var(--gray-50);">
                            <h3 class="card-title" style="font-size: 1.25rem;">Detail Pesanan</h3>
                        </div>
                        <div class="card-content">
                            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                                <span style="color: var(--gray-600);">Layanan</span>
                                <span style="font-weight: 600; color: var(--gray-800);">Laundry Reguler</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                                <span style="color: var(--gray-600);">Berat</span>
                                <span style="font-weight: 600; color: var(--gray-800);">1 kg</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                                <span style="color: var(--gray-600);">Harga per kg</span>
                                <span style="font-weight: 600; color: var(--primary);">Rp 7.000</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 0.75rem 0 0; font-weight: 700; font-size: 1.25rem; color: var(--primary);">
                                <span>Total</span>
                                <span>Rp 7.000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card" style="margin-bottom: 1.5rem;">
                        <div class="card-header" style="background-color: var(--gray-50);">
                            <h3 class="card-title" style="font-size: 1.25rem;">Informasi Pelanggan</h3>
                        </div>
                        <div class="card-content">
                            <p style="margin-bottom: 0.5rem;"><strong style="color: var(--gray-600);">Nama:</strong> <span id="confirm-name" style="font-weight: 600; color: var(--gray-800);">-</span></p>
                            <p style="margin-bottom: 0.5rem;"><strong style="color: var(--gray-600);">Telepon:</strong> <span id="confirm-phone" style="font-weight: 600; color: var(--gray-800);">-</span></p>
                            <p style="margin-bottom: 0.5rem;"><strong style="color: var(--gray-600);">Alamat:</strong> <span id="confirm-address" style="font-weight: 600; color: var(--gray-800);">-</span></p>
                            <p id="confirm-notes-container" style="display: none; margin-bottom: 0.5rem;"><strong style="color: var(--gray-600);">Catatan:</strong> <span id="confirm-notes" style="font-weight: 600; color: var(--gray-800);"></span></p>
                        </div>
                    </div>

                    <div class="button-group">
                        <button id="backToStep2" class="btn btn-outline">Kembali</button>
                        <button id="confirmOrder" class="btn btn-success">Konfirmasi Pesanan</button>
                    </div>
                </div>

                <!-- Step 4: Order Confirmed -->
                <div id="step4" class="section">
                    <div class="success-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    
                    <h2 class="success-title">Pesanan Berhasil!</h2>
                    <p class="success-message">Pesanan Anda telah diterima dan sedang diproses. Tim kami akan menghubungi Anda segera.</p>
                    
                    <div class="card" style="max-width: 28rem; margin: 0 auto 2rem;">
                        <div class="card-content">
                            <p style="font-size: 0.875rem; color: var(--gray-500); text-transform: uppercase; letter-spacing: 0.05em;">ID Pesanan</p>
                            <p class="order-id" id="order-id-display">ORD123ABC</p>
                            
                            <div class="estimated-time">
                                Estimasi selesai: 2-3 hari
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button id="newOrder" class="btn btn-primary">Buat Pesanan Baru</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // App state
            const state = {
                step: 1,
                order: {
                    service: 'reguler',
                    weight: 1,
                    name: '',
                    phone: '',
                    address: '',
                    notes: ''
                },
                services: [
                    { id: 'reguler', name: 'Laundry Reguler', price: 7000, duration: '2-3 hari' },
                    { id: 'express', name: 'Laundry Express', price: 10000, duration: '1 hari' },
                    { id: 'dryclean', name: 'Dry Clean', price: 15000, duration: '3-4 hari' },
                    { id: 'premium', name: 'Premium Service', price: 20000, duration: '1-2 hari' }
                ]
            };

            // DOM elements
            const stepSections = document.querySelectorAll('.section');
            const stepNumbers = document.querySelectorAll('.step-number');
            const stepConnectors = document.querySelectorAll('.step-connector');
            
            // Service selection
            const serviceCards = document.querySelectorAll('.service-card');
            const weightInput = document.getElementById('weight');
            const serviceNameElement = document.querySelector('.summary-detail:first-child');
            const servicePriceElement = document.querySelector('.summary-detail:nth-child(2)');
            const totalPriceElement = document.querySelector('.summary-total');
            
            // Customer info form
            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const addressInput = document.getElementById('address');
            const notesInput = document.getElementById('notes');
            
            // Confirmation elements
            const confirmName = document.getElementById('confirm-name');
            const confirmPhone = document.getElementById('confirm-phone');
            const confirmAddress = document.getElementById('confirm-address');
            const confirmNotes = document.getElementById('confirm-notes');
            const confirmNotesContainer = document.getElementById('confirm-notes-container');
            
            // Order completion
            const orderIdDisplay = document.getElementById('order-id-display');
            
            // Navigation buttons
            const nextToStep2Btn = document.getElementById('nextToStep2');
            const backToStep1Btn = document.getElementById('backToStep1');
            const nextToStep3Btn = document.getElementById('nextToStep3');
            const backToStep2Btn = document.getElementById('backToStep2');
            const confirmOrderBtn = document.getElementById('confirmOrder');
            const newOrderBtn = document.getElementById('newOrder');

            // Initialize
            updateProgressIndicator();
            updateOrderSummary();

            // Event listeners for service selection
            serviceCards.forEach(card => {
                card.addEventListener('click', () => {
                    const serviceId = card.getAttribute('data-service');
                    selectService(serviceId);
                });
            });

            // Weight input change
            weightInput.addEventListener('input', () => {
                const weight = Math.max(1, parseInt(weightInput.value) || 1);
                state.order.weight = weight;
                weightInput.value = weight;
                updateOrderSummary();
            });

            // Navigation events
            nextToStep2Btn.addEventListener('click', () => navigateToStep(2));
            backToStep1Btn.addEventListener('click', () => navigateToStep(1));
            nextToStep3Btn.addEventListener('click', () => {
                if (validateStep2()) {
                    updateConfirmationData();
                    navigateToStep(3);
                }
            });
            backToStep2Btn.addEventListener('click', () => navigateToStep(2));
            confirmOrderBtn.addEventListener('click', confirmOrder);
            newOrderBtn.addEventListener('click', resetOrder);

            // Function to select a service
            function selectService(serviceId) {
                state.order.service = serviceId;
                
                // Update UI
                serviceCards.forEach(card => {
                    if (card.getAttribute('data-service') === serviceId) {
                        card.classList.add('selected');
                        
                        // Add the selected badge if it doesn't exist
                        if (!card.querySelector('.selected-badge')) {
                            const badge = document.createElement('div');
                            badge.className = 'selected-badge';
                            badge.textContent = 'Dipilih';
                            card.appendChild(badge);
                        }
                    } else {
                        card.classList.remove('selected');
                        
                        // Remove the selected badge if it exists
                        const badge = card.querySelector('.selected-badge');
                        if (badge) {
                            badge.remove();
                        }
                    }
                });
                
                updateOrderSummary();
            }

            // Function to update order summary
            function updateOrderSummary() {
                const selectedService = state.services.find(s => s.id === state.order.service);
                const total = state.order.weight * selectedService.price;
                
                serviceNameElement.textContent = selectedService.name;
                servicePriceElement.textContent = `${state.order.weight} kg × Rp ${selectedService.price.toLocaleString('id-ID')}`;
                totalPriceElement.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
            }

            // Function to update confirmation data
            function updateConfirmationData() {
                confirmName.textContent = state.order.name;
                confirmPhone.textContent = state.order.phone;
                confirmAddress.textContent = state.order.address;
                
                if (state.order.notes) {
                    confirmNotes.textContent = state.order.notes;
                    confirmNotesContainer.style.display = 'block';
                } else {
                    confirmNotesContainer.style.display = 'none';
                }
                
                // Update order details in confirmation
                const selectedService = state.services.find(s => s.id === state.order.service);
                const total = state.order.weight * selectedService.price;
                
                document.querySelector('#step3 .card:first-child .card-content').innerHTML = `
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                        <span style="color: var(--gray-600);">Layanan</span>
                        <span style="font-weight: 600; color: var(--gray-800);">${selectedService.name}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                        <span style="color: var(--gray-600);">Berat</span>
                        <span style="font-weight: 600; color: var(--gray-800);">${state.order.weight} kg</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">
                        <span style="color: var(--gray-600);">Harga per kg</span>
                        <span style="font-weight: 600; color: var(--primary);">Rp ${selectedService.price.toLocaleString('id-ID')}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem 0 0; font-weight: 700; font-size: 1.25rem; color: var(--primary);">
                        <span>Total</span>
                        <span>Rp ${total.toLocaleString('id-ID')}</span>
                    </div>
                `;
            }

            // Function to validate step 2
            function validateStep2() {
                state.order.name = nameInput.value.trim();
                state.order.phone = phoneInput.value.trim();
                state.order.address = addressInput.value.trim();
                state.order.notes = notesInput.value.trim();
                
                if (!state.order.name || !state.order.phone || !state.order.address) {
                    alert('Harap isi semua field yang wajib diisi (nama, telepon, alamat)');
                    return false;
                }
                
                return true;
            }

            // Function to confirm order
            function confirmOrder() {
                // Generate random order ID
                const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
                orderIdDisplay.textContent = orderId;
                
                // Update estimated time based on service
                const selectedService = state.services.find(s => s.id === state.order.service);
                document.querySelector('.estimated-time').textContent = `Estimasi selesai: ${selectedService.duration}`;
                
                navigateToStep(4);
            }

            // Function to reset order
            function resetOrder() {
                // Reset form values
                state.order = {
                    service: 'reguler',
                    weight: 1,
                    name: '',
                    phone: '',
                    address: '',
                    notes: ''
                };
                
                // Reset UI
                selectService('reguler');
                weightInput.value = '1';
                nameInput.value = '';
                phoneInput.value = '';
                addressInput.value = '';
                notesInput.value = '';
                
                navigateToStep(1);
            }

            // Function to navigate between steps
            function navigateToStep(step) {
                state.step = step;
                
                // Hide all sections
                stepSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show current section
                document.getElementById(`step${step}`).classList.add('active');
                
                // Update progress indicator
                updateProgressIndicator();
            }

            // Function to update progress indicator
            function updateProgressIndicator() {
                stepNumbers.forEach((number, index) => {
                    const stepNum = index + 1;
                    if (stepNum <= state.step) {
                        number.classList.remove('inactive');
                        number.classList.add('active');
                    } else {
                        number.classList.remove('active');
                        number.classList.add('inactive');
                    }
                });
                
                stepConnectors.forEach((connector, index) => {
                    const stepNum = index + 1;
                    if (stepNum < state.step) {
                        connector.classList.remove('inactive');
                        connector.classList.add('active');
                    } else {
                        connector.classList.remove('active');
                        connector.classList.add('inactive');
                    }
                });
            }
        });
    </script>
</body>
</html>
