// ChunkChain_CLI.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

//Dependencies
#include <iostream>
#include <vector>
#include <string>
#include <chrono>
#include <map>

//Internal Dependencies
#include "Player.h"
#include "Server.h"
#include "Prompts.h"

// Servers list
std::vector<Server> servers;


void ListServers() {

    Prompt("List of Online Servers: \n");

    for (const Server& server : servers) {
        if (server.isOnline) {
            Prompt("Name: " + server.name + ", Address: " + server.host + ":" + server.port + "\n");
        }
    }

    Prompt("\n" + std::string("List of Offline Servers:") + "\n");

    for (const Server& server : servers) {
        if (!server.isOnline) {
            Prompt("Name: " + server.name + ", Address: " + server.host + ":" + server.port + "\n");
        }
    }

    Prompt("\n");
}

void CreateServer() {

    Server newServer;

    std::cout << std::endl;
    
    PromptQuestion("Enter server name: ", newServer.name);
    PromptQuestion("Enter server hostname: ", newServer.host);
    PromptQuestion("Enter server port: ", newServer.port);
    PromptQuestion("Enter server max connections: ", newServer.maxConnections, 16);

    newServer.isOnline = false;

    servers.push_back(newServer);

    Prompt("\nServer created successfully!");

}

void ManageServer() {

};

void EditServer() {

    std::string serverName;
    std::cout << "Enter the name of the server to edit: ";
    std::getline(std::cin, serverName);

    for (Server& server : servers) {

        if (server.name == serverName && !server.isOnline) {

            std::cout << "Enter the new name for the server: ";
            std::getline(std::cin, server.name);

            std::cout << "Enter the new hostname for the server: ";
            std::getline(std::cin, server.host);

            std::cout << "Enter the new port for the server: ";
            std::getline(std::cin, server.port);

            std::cout << "Server edited successfully!" << std::endl << std::endl;

            return;
        }
        else if(server.name == serverName && server.isOnline) {

            std::cout << "Server is Online and cannot be edited. Shutdown server and try again." << std::endl << std::endl;
            return;
        }

    }

    std::cout << "Server not found." << std::endl << std::endl;

    return;
}

int main() {

    int option;

    do {

        std::cout << "Select an option:" << std::endl << std::endl;

        std::cout << "1. List Online Servers" << std::endl;
        std::cout << "2. Manage Server" << std::endl;
        std::cout << "3. Create Server" << std::endl;
        std::cout << "4. Edit Server Details" << std::endl;
        std::cout << "5. Exit" << std::endl << std::endl;
        
        PromptQuestion("\nOption: \n", option);

        switch (option) {
        case 1:
            ListServers();
            break;
        case 2:
            ManageServer();
            break;
        case 3:
            CreateServer();
            break;
        case 4:
            EditServer();
            break;
        case 5:
            std::cout << "Exiting..." << std::endl;
            break;
        default:
            std::cout << "Invalid option. Try again." << std::endl << std::endl;
            break;
        }

        //ClearInputBuffer(); // Clear input buffer to prevent multiple words affecting the next cin
    } while (option != 5);

    return 0;
}


// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
