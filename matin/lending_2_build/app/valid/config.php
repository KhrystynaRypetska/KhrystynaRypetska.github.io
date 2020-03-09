<?php
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме
	const REQUIREDERROR = "⚠ Поле обязательно для заполнения";
	const REQUIREDERROR_ENG = "⚠ Required field";
	const REQUIREDERROR_DE = "⚠ Das Feld ist erforderlich";

	// Имя
	const NAMEISREQUIRED = true;

	// Телефон
	const TELISREQUIRED = false;
	const MSGSTELNOADD = "Не указан!";

	// Email
	const EMAILISREQUIRED = true;

	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";
	const MSGSEMAILINCORRECT_ENG = "⚠ Invalid email address";
	const MSGSEMAILINCORRECT_DE = "⚠ Ungültige E-Mail-Adresse";

	// Текстовое поле
	const TEXTISREQUIRED = true;


	// Файл
	const FILEISREQUIRED = false;
	const MSGSFILEERROR = "⚠ Забыли добавить файл";

	// Соглашение
	const AGGREMENTISREQUIRED = true;
	const MSGSAGGREMENTERROR = "⚠ Примите пользовательское соглашение";
	const MSGSAGGREMENTERROR_ENG = "⚠ Accept User Agreement";
	const MSGSAGGREMENTERROR_DE = "⚠ Benutzervereinbarung akzeptieren";

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";
	const MSGSSUCCESS_ENG = "Message sent successfully";
	const MSGSSUCCESS_DE = "Nachricht erfolgreich gesendet";

	// *** SMTP *** //

	const HOST = 'smtp.gmail.com';
	const LOGIN = 'test.mail.yevgen@gmail.com';
	const PASS = 'jeka30111988';
	const PORT = '465';

	// *** /SMTP *** //

	// Почта с которой будет приходить письмо
	const SENDER = 'test.mail.yevgen@gmail.com';

	// Почта на которую будет приходить письмо
	const CATCHER = 'test.mail.yevgen@gmail.com';

	// Тема письма
	const SUBJECT = 'Заявка с сайта';

	// Кодировка
	const CHARSET = 'UTF-8';
