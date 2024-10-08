<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $roles = Role::with(['permissions'])
            ->where('name', 'like', '%' . $search . '%')
            ->orderBy('id', 'desc')->paginate(25);

        return response()->json([
            'total' => $roles->total(),
            'roles' => $roles->map(function ($role) {
                $role->permission_pluck = $role->permissions->pluck('name');
                $role->created_at = $role->created_at->format('Y-m-d');
                return $role;
            }),
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $isRole = Role::where('name', $request->get('name'))->first();
        if ($isRole) {
            return response()->json([
                'message' => 'Role already exists',
            ], 422);
        }

        $role = Role::create([
            'name' => $request->get('name'),
            'guard_name' => 'api',
        ]);


        foreach ($request->get('permissions') as $key => $permission) {
            $role->givePermissionTo($permission);
        }
        return response()->json([
            'message' => 'Role created successfully',
            'role' => [
                'id' => $role->id,
                'name' => $role->name,
                'permission_pluck' => $role->permissions->pluck('name'),
                'permissions' => $role->permissions,
                'created_at' => $role->created_at->format('Y-m-d H:i A'),
            ]
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $isRole = Role::where('name', $request->get('name'))->where('id', '<>', $request->id)->first();
        if ($isRole) {
            return response()->json([
                'message' => 'Role already exists',
            ], 402);
        }

        $role = Role::findOrFail($id);
        $role->update($request->all());
        $role->syncPermissions($request->get('permissions'));

        return response()->json([
            'message' => 'Role created successfully',
            'role' => [
                'id' => $role->id,
                'name' => $role->name,
                'permission_pluck' => $role->permissions->pluck('name'),
                'permissions' => $role->permissions,
                'created_at' => $role->created_at->format('Y-m-d H:i A'),
            ]
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);

        $role->delete();
        return response()->json([
            'message' => 'Role deleted successfully',
        ], 200);

    }
}
