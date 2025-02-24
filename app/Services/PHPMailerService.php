<?php

namespace App\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class PHPMailerService
{
    public function sendMail($to, $subject, $body)
    {
        $mail = new PHPMailer(true);

        try {
            // Configuración del servidor SMTP
            /* $mail->isSMTP();
            $mail->Host = config('mail.mailers.smtp.host');
            $mail->SMTPAuth = true;
            $mail->SMTPAutoTLS = false;
            $mail->SMTPSecure = false;
            $mail->Username = config('mail.mailers.smtp.username');
            $mail->Password = config('mail.mailers.smtp.password');
            $mail->Port = config('mail.mailers.smtp.port'); */
            $mail->isSMTP();
            $mail->Host = config('mail.mailers.smtp.host');
            $mail->SMTPAuth = true;
            $mail->Username = config('mail.mailers.smtp.username');
            $mail->Password = config('mail.mailers.smtp.password');
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Usa SSL
            $mail->Port = config('mail.mailers.smtp.port');
            $mail->setFrom(config('mail.from.address'), config('mail.from.name'));

            // Remitente y destinatario
            $fromAddress = config('mail.from.address');
            $fromName = config('mail.from.name');
            $fromHost = config('mail.mailers.smtp.host');
            $fromUsername = config('mail.mailers.smtp.username');
            $fromPassword = config('mail.mailers.smtp.password');
            $fromPort = config('mail.mailers.smtp.port');

            if (empty($fromAddress)) {
                throw new Exception('MAIL_FROM_ADDRESS está vacío en el archivo .env');
            }

            if (empty($fromHost)) {
                throw new Exception('MAIL_HOST está vacío en el archivo .env');
            }

            if (empty($fromUsername)) {
                throw new Exception('MAIL_USERNAME está vacío en el archivo .env');
            }

            if (empty($fromPassword)) {
                throw new Exception('MAIL_PASSWORD está vacío en el archivo .env');
            }

            if (empty($fromPort)) {
                throw new Exception('MAIL_PORT está vacío en el archivo .env');
            }

            // Remitente y destinatario
            $mail->setFrom($fromAddress, $fromName);
            $mail->addAddress($to);

            // Contenido del correo
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;

            $mail->send();
            return ['status' => 'success', 'message' => 'Correo enviado correctamente'];
        } catch (Exception $e) {
            // Registrar error en el log de Laravel
            Log::error('Error al enviar correo: ' . $e->getMessage());
            return ['status' => 'error', 'message' => "Error al enviar el correo: " . $e->getMessage()];
        }
    }
}
