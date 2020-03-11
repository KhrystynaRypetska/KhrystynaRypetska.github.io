<?php
	$msgs = [];
	$lang = $_POST['lang'];

	if (isset($_POST['name'])) {
		if (empty($_POST['name']) && NAMEISREQUIRED) {

			if($lang == 'ru'){$msgs['name'] = REQUIREDERROR;}
			if ($lang == 'en'){$msgs['name'] = REQUIREDERROR_ENG;}
			if ($lang == 'de'){$msgs['name'] = REQUIREDERROR_DE;}

		} else {
			if (!empty($_POST['name'])) {
				$name = "<b>Имя: </b>" . trim(strip_tags($_POST['name'])) . "<br>";
			}

		}
	}

	if (isset($_POST['tel'])) {
		if (empty($_POST['tel']) && TELISREQUIRED) {
			if($lang == 'ru'){$msgs['tel'] = REQUIREDERROR;}
			if ($lang == 'en'){$msgs['tel'] = REQUIREDERROR_ENG;}
			if ($lang == 'de'){$msgs['tel'] = REQUIREDERROR_DE;}
		} else {
			if (!empty($_POST['tel'])) {
				$tel = "<b>Телефон: </b> " . trim(strip_tags($_POST['tel'])) . "<br>";
			} else {
				$tel = "<b>Телефон: </b> " . MSGSTELNOADD . "<br>";
			}
		}
	}

	if (isset($_POST['email'])) {
		if (empty($_POST['email']) && EMAILISREQUIRED) {
			if($lang == 'ru'){$msgs['email'] = REQUIREDERROR;}
			if ($lang == 'en'){$msgs['email'] = REQUIREDERROR_ENG;}
			if ($lang == 'de'){$msgs['email'] = REQUIREDERROR_DE;}
		} else {
			if (!empty($_POST['email'])) {
				if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
					$email = "<b>Почта: </b> " . trim(strip_tags($_POST['email'])) . "<br>";
				} else {
					$msgs['email'] = MSGSEMAILINCORRECT;
					if($lang == 'ru'){$msgs['email'] = MSGSEMAILINCORRECT;}
					if ($lang == 'en'){$msgs['email'] = MSGSEMAILINCORRECT_ENG;}
					if ($lang == 'de'){$msgs['email'] = MSGSEMAILINCORRECT_DE;}
				}
			}
		}
	}

	if (isset($_POST['text'])) {
		if (empty($_POST['text']) && TEXTISREQUIRED) {
			if($lang == 'ru'){$msgs['text'] = REQUIREDERROR;}
			if ($lang == 'en'){$msgs['text'] = REQUIREDERROR_ENG;}
			if ($lang == 'de'){$msgs['text'] = REQUIREDERROR_DE;}
		} else {
			if (!empty($_POST['text'])) {
				$text = "<b>Сообщение: </b> " . trim(strip_tags($_POST['text'])) . "<br>";
			}
		}
	}

	if (empty($_POST['agreement']) && AGGREMENTISREQUIRED) {

		if($lang == 'ru'){$msgs['agreement'] = MSGSAGGREMENTERROR;}
		if ($lang == 'en'){$msgs['agreement'] = MSGSAGGREMENTERROR_ENG;}
		if ($lang == 'de'){$msgs['agreement'] = MSGSAGGREMENTERROR_DE;}
	} else {
		if (!empty($_POST['agreement'])) {
			$agreement = "<b>Соглашение: </b> Пользовательское соглашение принято " . "<br>";
		}
	}

	if ((empty($_POST['email']) && empty($_POST['tel'])) && (!EMAILISREQUIRED && !TELISREQUIRED)) {
		$msgs['attantion'] = 'Заполните хотя бы одно контактное поле для связи с вами';
	}

	if ($msgs) {
		echo json_encode($msgs);
		die;
	} else {

		if($lang == 'ru'){$msgs['success'] = MSGSSUCCESS;}
		if ($lang == 'en'){$msgs['success'] = MSGSSUCCESS_ENG;}
		if ($lang == 'de'){$msgs['success'] = MSGSSUCCESS_DE;}
	}