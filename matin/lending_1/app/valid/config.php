<?php
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const NAMEISREQUIRED = true;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Телефон
	const TELISREQUIRED = false;
	const MSGSTELERROR = "⚠ Поле обязательно для заполнения";
	const MSGSTELNOADD = "Не указан!";

	// Email
	const EMAILISREQUIRED = true;
	const MSGSEMAILERROR = "⚠ Поле обязательно для заполнения";
	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";

	// Текстовое поле
	const TEXTISREQUIRED = true;
	const MSGSTEXTERROR = "⚠ Поле обязательно для заполнения";

	// Файл
	const FILEISREQUIRED = false;
	const MSGSFILEERROR = "⚠ Забыли добавить файл";

	// Соглашение
	const AGGREMENTISREQUIRED = true;
	const MSGSAGGREMENTERROR = "⚠ Примите пользовательское соглашение";

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

//		require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		const HOST = 'smtp.gmail.com';
		const LOGIN = 'mail1.for.testing.sites@gmail.com';
		const PASS = 'jeka30111988';
		const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'mail1.for.testing.sites@gmail.com';

	// Почта на которую будет приходить письмо
	const CATCHER = 'mail1.for.testing.sites@gmail.com';

	// Тема письма
	const SUBJECT = 'Заявка с сайта';

	// Кодировка
  const CHARSET = 'UTF-8';
