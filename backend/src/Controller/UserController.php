<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\User;

#[Route('/api')]
class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user',methods:['GET'])]
    public function index(ManagerRegistry $doctrine): Response
    {
        $user = $doctrine->getRepository(User::class)->findAll();

        return $this->json($user);
    }
    #[Route('/user/{id}', name: 'user_id', methods: ['GET'])]
    public function affSeulUser(int $id, ManagerRegistry $doctrine): Response
    {
        $user = $doctrine->getRepository(User::class)->find($id);

        return $this->json($user);
    }

    #[Route('/user', name: 'user_post', methods: ['POST'])]
    public function postUser(Request $request, ManagerRegistry $doctrine): Response
    {

        $entityManager = $doctrine->getManager();
        $user = new User();
        $user->setNom($request->get('nom'));
        $user->setMail($request->get('mail'));
        $user->setPassword($request->get('password'));

        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json('Created new user successfully with id ' . $user->getId());
    }

    #[Route('/user/{id}', name: 'user_edit', methods: ['PUT'])]
    public function editUser(int $id, Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $user = $doctrine->getRepository(User::class)->find($id);
        $user->setNom($request->get('nom'));
        $user->setMail($request->get('mail'));
        $user->setPassword($request->get('password'));

        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json('The user has been successfully updated with id ' . $user->getId());
    }

    #[Route('/user/{id}', name: 'user_delete', methods: ['DELETE'])]
    public function userDel(ManagerRegistry $doctrine, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $user = $doctrine->getRepository(User::class)->find($id);
        $entityManager->remove($user);
        $entityManager->flush();
        return $this->json('The user has been successfully deleted with id ' . $user->getId());
    }





}

