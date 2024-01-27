import { ITransactionService } from '@/interfaces/transaction.interface';
import { TransactionStatusServiceEnum } from '@/enums/transactionStatus.enum';
import { TransactionTypeServiceEnum } from '@/enums/transactionType.enum';

export const transactions: ITransactionService[] = [
  {
    id: '1',
    date: '2024-01-05',
    amount: 100,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Зарплата',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Зарплата',
    paymentDetail: 'Direct Deposit',
  },
  {
    id: '2',
    date: '2024-01-06',
    amount: -50,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Покупка продуктов',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Продукты',
    paymentDetail: 'Card ending in 1234',
  },
  {
    id: '3',
    date: '2024-01-03',
    amount: 200,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Фриланс',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Фриланс',
    paymentDetail: 'PayPal',
  },
  {
    id: '4',
    date: '2024-01-04',
    amount: -20,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Кино',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Развлечения',
    paymentDetail: 'Card ending in 5678',
  },
  {
    id: '5',
    date: '2024-01-05',
    amount: 150,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Продажа вещей',
    status: TransactionStatusServiceEnum.FAILED,
    category: 'Продажи',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '6',
    date: '2024-01-06',
    amount: -40,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Ресторан',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Питание вне дома',
    paymentDetail: 'Card ending in 9876',
  },
  {
    id: '7',
    date: '2024-01-07',
    amount: 120,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Консультация',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Консультации',
    paymentDetail: 'PayPal',
  },
  {
    id: '8',
    date: '2024-01-08',
    amount: -25,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Транспорт',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Транспорт',
    paymentDetail: 'Card ending in 5432',
  },
  {
    id: '9',
    date: '2024-01-09',
    amount: 80,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Дивиденды',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Инвестиции',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '10',
    date: '2024-01-10',
    amount: -60,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Одежда',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Шопинг',
    paymentDetail: 'Card ending in 1111',
  },
  {
    id: '11',
    date: '2024-01-11',
    amount: 180,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Проект',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Проекты',
    paymentDetail: 'PayPal',
  },
  {
    id: '12',
    date: '2024-01-12',
    amount: -70,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Ремонт',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Ремонт дома',
    paymentDetail: 'Card ending in 2222',
  },
  {
    id: '13',
    date: '2024-01-13',
    amount: 250,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Инвестиции',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Инвестиции',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '14',
    date: '2024-01-14',
    amount: -35,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Кафе',
    status: TransactionStatusServiceEnum.FAILED,
    category: 'Питание вне дома',
    paymentDetail: 'Card ending in 3333',
  },
  {
    id: '15',
    date: '2024-01-15',
    amount: 120,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Курс',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Образование',
    paymentDetail: 'PayPal',
  },
  {
    id: '16',
    date: '2024-01-16',
    amount: -40,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Медицина',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Здоровье',
    paymentDetail: 'Card ending in 4444',
  },
  {
    id: '17',
    date: '2024-01-17',
    amount: 90,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Конференция',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Конференции',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '18',
    date: '2024-01-18',
    amount: -30,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Хобби',
    status: TransactionStatusServiceEnum.FAILED,
    category: 'Хобби',
    paymentDetail: 'Card ending in 5555',
  },
  {
    id: '19',
    date: '2024-01-19',
    amount: 180,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Проект',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Проекты',
    paymentDetail: 'PayPal',
  },
  {
    id: '20',
    date: '2024-01-20',
    amount: -25,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Транспорт',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Транспорт',
    paymentDetail: 'Card ending in 6666',
  },
  {
    id: '21',
    date: '2024-02-20',
    amount: -235,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Проверка',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Транспорт',
    paymentDetail: 'Card ending in 6666',
  },
  {
    id: '22',
    date: '2024-02-21',
    amount: 120,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Фриланс',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Фриланс',
    paymentDetail: 'PayPal',
  },
  {
    id: '23',
    date: '2024-02-22',
    amount: -30,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Кофе',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Питание вне дома',
    paymentDetail: 'Card ending in 7777',
  },
  {
    id: '24',
    date: '2024-02-23',
    amount: 90,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Книги',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Развлечения',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '25',
    date: '2024-02-24',
    amount: -25,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Такси',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Транспорт',
    paymentDetail: 'Card ending in 8888',
  },
  {
    id: '26',
    date: '2024-02-25',
    amount: 200,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Аренда',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Жилье',
    paymentDetail: 'PayPal',
  },
  {
    id: '27',
    date: '2024-02-21',
    amount: 50,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Продажа книг',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Продажи',
    paymentDetail: 'Bank Transfer',
  },
  {
    id: '28',
    date: '2024-02-22',
    amount: -40,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Обед',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Питание вне дома',
    paymentDetail: 'Card ending in 9999',
  },
  {
    id: '29',
    date: '2024-02-21',
    amount: 150,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Аренда офиса',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Бизнес',
    paymentDetail: 'PayPal',
  },
  {
    id: '30',
    date: '2024-02-24',
    amount: -30,
    type: TransactionTypeServiceEnum.EXPENSE,
    description: 'Подписка на журнал',
    status: TransactionStatusServiceEnum.PENDING,
    category: 'Развлечения',
    paymentDetail: 'Card ending in 1234',
  },
  {
    id: '31',
    date: '2024-02-25',
    amount: 120,
    type: TransactionTypeServiceEnum.INCOME,
    description: 'Услуги по консультации',
    status: TransactionStatusServiceEnum.COMPLETED,
    category: 'Консультации',
    paymentDetail: 'Bank Transfer',
  },
];
