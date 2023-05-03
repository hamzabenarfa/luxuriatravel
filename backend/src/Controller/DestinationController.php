<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Destination;
#[Route('/api')]
class DestinationController extends AbstractController
{
    #[Route('/destination', name: 'app_destination')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $destination = $doctrine->getRepository(Destination::class)->findAll();

        return $this->json($destination);
    }
}
