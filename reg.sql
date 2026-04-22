-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 11 2026 г., 07:01
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- База данных: `reg`
--
CREATE DATABASE IF NOT EXISTS `reg` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `reg`;

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `link` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id`, `link`, `name`, `price`) VALUES
(1, 'https://img.freepik.com/premium-photo/new-metal-cooking-pot-isolated-white_93675-89399.jpg?semt=ais_', 'Кастрюля', 1500),
(2, 'https://ir.ozone.ru/s3/multimedia-0/6248680188.jpg', 'Миксер', 2500),
(3, 'https://avatars.mds.yandex.net/get-mpic/15031594/2a00000198d6c2799d7d82484358253f382c/orig', 'Чайник', 1200),
(4, 'https://ir.ozone.ru/s3/multimedia-j/6284372371.jpg', 'Столовый набор премиум', 30000),
(5, 'https://premium-bt.ru/upload/iblock/47a/smeg_tr4110bl1_cooker.jpg', 'Плита SMEGMA', 400000),
(6, 'https://ir.ozone.ru/s3/multimedia-4/6833435548.jpg', 'Микроволновка SHEIH', 53000),
(7, 'https://static.eldorado.ru/img1/b/bb/755504002.jpg', 'Вытяжка MONARCH', 136000),
(8, 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/11/21/07/92/42/11/11/600002710138b0.jpeg', 'Набор кухонных ножей', 3500),
(9, 'https://micro-line.ru/images/detailed/512/20210617222414-7295115-0.jpg', 'Сковорода антипригарная 28 см', 2800),
(10, 'https://ir.ozone.ru/multimedia/1008775931.jpg', 'Доска разделочная бамбуковая', 890),
(11, 'https://ir.ozone.ru/s3/multimedia-1/6024098257.jpg', 'Блендер погружной 600 Вт', 4200),
(12, 'https://img.mvideo.ru/Big/20072383bb.jpg', 'Кофеварка капельная', 5900),
(13, 'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/574660/5_574660.jpg', 'Тостер на 2 ломтя', 3100),
(14, 'https://ir.ozone.ru/s3/multimedia-1-1/6950230993.jpg', 'Набор контейнеров для еды (5 шт)', 1650),
(15, 'https://ir.ozone.ru/multimedia/1010826771.jpg', 'Весы кухонные электронные', 1290),
(16, 'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/192478/1_192478.jpg', 'Мясорубка электрическая', 7800),
(17, 'https://425555.ru/upload/iblock/b1b/lf78iiqkjf1368udhem7ndh15a9wm54b.jpg', 'Мультиварка 5 л, 12 программ', 8900);

-- --------------------------------------------------------

--
-- Структура таблицы `rebasa`
--

CREATE TABLE `rebasa` (
  `id` int(11) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rebasa`
--

INSERT INTO `rebasa` (`id`, `nickname`, `password`) VALUES
(1, 'qqeee', 'eeqqqq'),
(2, 'userrr', 'passsss'),
(3, 'popop', 'popop'),
(4, 'ppl', 'lpp'),
(5, 'bhjhbjb', 'bhkhgbk'),
(6, 'popwa', 'oepwaoep'),
(7, 'ggh', 'dfgh'),
(8, 'мсапероглшдщжз', 'впармиолтбьдю');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `rebasa`
--
ALTER TABLE `rebasa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `rebasa`
--
ALTER TABLE `rebasa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;
